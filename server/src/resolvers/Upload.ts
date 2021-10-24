import { randomInt } from "crypto";
import { createWriteStream } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import path from "path";
import { Arg, Field, Mutation, ObjectType, Resolver } from "type-graphql";
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
