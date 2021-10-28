import { randomInt } from "crypto";
import { createWriteStream, unlinkSync } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import path, { join } from "path";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
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
    @Arg("id", () => String) id: string,
    @Arg("field", () => String, { nullable: true }) field: string
  ): Promise<string> {
    if (!id) return "Project id is required for updating the project image.";
    if (!prevname)
      return "Image previous name is required for updating the project image.";
    let foundImageOwner: any = null;
    if (field === "project") {
      const project = await prisma.project.findUnique({
        where: {
          id,
        },
      });
      foundImageOwner = project;
    } else if (field === "sketch") {
      const sketch = await prisma.sketch.findUnique({
        where: {
          id,
        },
      });
      foundImageOwner = sketch;
    } else if (field === "hero") {
      foundImageOwner = true;
    }
    if (!foundImageOwner)
      throw new Error(`Couldn't find ImageOwner with id ${id}`);
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
          if (field === "project") {
            await prisma.project
              .update({
                where: {
                  id,
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
          } else if (field === "sketch") {
            await prisma.sketch
              .update({
                where: {
                  id,
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
          } else if (field === "hero") {
            await prisma.admin
              .update({
                data: {
                  heroImage: filename,
                },
                where: {
                  id: id,
                },
              })
              .then(() => {
                resolve(filename);
              })
              .catch(console.error);
          }
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
