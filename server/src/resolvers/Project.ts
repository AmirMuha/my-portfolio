import { Ctx, Resolver, Mutation, Args, UseMiddleware } from "type-graphql";
import { CreateProjectWithNestedRelationsArgs } from "../types/arg-types/CreateProjectWithNestedRelationsArgs";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { MyContext } from "../types/MyContext";

@Resolver()
export class CreateProjectWithNestedRelationsResolver {
  @UseMiddleware(isLoggedIn)
  @Mutation(() => Boolean || String)
  async createProjectWithNestedRelations(
    @Ctx() { prisma, data: { userId } }: MyContext,
    @Args() { data }: CreateProjectWithNestedRelationsArgs
  ): Promise<boolean | string> {
    let questionsPromise;
    const sketchPromises = [];
    const techCategoriesPromises = [];
    const project = await prisma.project.create({
      data: {
        app_url: data.app_url,
        github_url: data.github_url,
        summary: data.summary,
        name: data.name,
        type: data.type,
        image: data.image,
        admin_id: userId,
      },
      select: {
        id: true,
      },
    });

    for await (const sk of data.sketches) {
      const skPromise = await prisma.sketch.create({
        data: {
          title: sk.title,
          description: sk.description,
          summary: sk.summary,
          image: sk.image,
          download_link: sk.download_link,
          project_id: project.id,
        },
      });
      if (skPromise) {
        sketchPromises.push(skPromise);
      }
    }

    if (data.questions.length > 0) {
      questionsPromise = await prisma.question.createMany({
        data: data.questions.map((q) => ({
          project_id: project.id,
          question: q.question,
          answer: q.answer,
        })),
      });
    }

    for await (const tc of data.techCategories) {
      const tcPromise = await prisma.techCategory.create({
        data: {
          name: tc.name,
          techs: { createMany: { data: tc.techs } },
          project_id: project.id,
        },
      });
      if (tcPromise) {
        techCategoriesPromises.push(tcPromise);
      }
    }

    return Promise.all([
      ...techCategoriesPromises,
      ...sketchPromises,
      questionsPromise,
    ])
      .then(() => {
        return true;
      })
      .catch(async (e) => {
        console.log(e);
        await prisma.project.delete({
          where: {
            id: project.id,
          },
        });
        return e.message;
      });
  }
}
