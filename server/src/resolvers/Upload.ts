import { randomInt } from "crypto";
import { createWriteStream, unlinkSync } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import path, { join } from "path";
import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { MyContext } from "../types/MyContext";
@Resolver()
export class UploadResolver {
  @Mutation(() => String || Error)
  async uploadSingleFile(
    @Arg("file", () => GraphQLUpload)
    { mimetype, createReadStream }: FileUpload
  ): Promise<string | Error> {
    const filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
    return new Promise((resolve, reject) => {
      const stream = createReadStream();
      stream
        .pipe(
          createWriteStream(
            path.join(__dirname, "../../src/uploads/", filename)
          )
        )
        .on("error", (e) => {
          console.error(e);
          reject(e);
        })
        .on("finish", () => resolve(filename));
    });
  }

  @Mutation(() => String, { nullable: true })
  async updateImage(
    @Ctx() { prisma }: MyContext,
    @Arg("file", () => GraphQLUpload)
    { mimetype, createReadStream }: FileUpload,
    @Arg("prevname", () => String) prevname: string,
    @Arg("projectId", () => String) projectId: string
  ): Promise<string> {
    if (!projectId)
      return "Project id is required for updating the project image.";
    if (!prevname)
      return "Image previous name is required for updating the project image.";
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });
    if (!project) return `Couldn't find project with id ${projectId}`;
    try {
      unlinkSync(join(__dirname, "../uploads/" + prevname));
    } catch (e) {}
    const filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
    return new Promise((resolve, reject) => {
      const stream = createReadStream();
      stream
        .pipe(
          createWriteStream(
            path.join(__dirname, "../../src/uploads/", filename)
          )
        )
        .on("error", (e) => {
          console.error(e);
          reject(e);
        })
        .on("finish", async () => {
          await prisma.project
            .update({
              where: {
                id: projectId,
              },
              data: {
                image: {
                  set: filename,
                },
              },
            })
            .then(() => {
              resolve(filename);
            })
            .catch(console.error);
        });
    });
  }

  @Mutation(() => [String], { nullable: true })
  async uploadMultipleFiles(
    @Arg("files", () => [GraphQLUpload])
    files: FileUpload[]
  ): Promise<string[]> {
    const filenames: string[] = [];
    for await (const file of files) {
      try {
        const { mimetype, createReadStream } = await file;
        const filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
        const stream = createReadStream();
        stream.pipe(
          createWriteStream(
            path.join(__dirname, "../../src/uploads/", filename)
          )
        );
        filenames.push(filename);
      } catch (e) {
        console.error(e);
      }
    }
    return filenames;
  }
}
