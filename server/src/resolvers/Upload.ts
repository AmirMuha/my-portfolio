import { randomInt } from "crypto";
import { createWriteStream } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import path from "path";
import { Arg, Mutation, Resolver } from "type-graphql";
@Resolver()
export class UploadResolver {
  @Mutation(() => Boolean)
  async uploadSingleFile(
    @Arg("file", () => GraphQLUpload)
    { mimetype, createReadStream }: FileUpload
  ): Promise<Boolean | Error> {
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
        .on("finish", () => resolve(true));
    });
  }

  @Mutation(() => Boolean)
  async uploadMultipleFiles(
    @Arg("files", () => [GraphQLUpload])
    files: FileUpload[]
  ): Promise<boolean> {
    const promises: Promise<boolean | Error>[] = [];
    files.forEach(async (file) => {
      const { mimetype, createReadStream } = await file;
      const promise = new Promise<boolean>((resolve, reject) => {
        const filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
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
          .on("finish", () => resolve(true));
      });
      promises.push(promise);
    });
    return Promise.all(promises)
      .catch(() => false)
      .then(() => true);
  }
}
