import { randomInt } from "crypto";
import sharp from "sharp";
import { unlink, rename, createWriteStream, unlinkSync } from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import path, { join } from "path";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import archiver from "archiver";
import { MyContext } from "../types/myContext.type";

@Resolver()
export class UploadResolver {
  @Mutation(() => String || Error)
  async uploadFilesToZip(
    @Arg("files", () => [GraphQLUpload])
    files: FileUpload[],
    @Arg("isEdit", () => Boolean) isEdit: boolean = true
  ): Promise<string | Error> {
    const zipName = `zip-${randomInt(100000)}.zip`;
    const promises: Promise<boolean>[] = [];
    const wStream = createWriteStream(
      path.join(__dirname, `../uploads${isEdit ? "/" : "/temp/"}`, zipName)
    );
    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.pipe(wStream);
    for (const file of files) {
      const { createReadStream, mimetype } = await file;
      const stream = createReadStream();
      const promise = new Promise<boolean>((resolve, reject) => {
        let filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
        if (filename.includes("+")) {
          filename = filename.replace("+xml", "");
        }
        archive.append(stream, { name: filename });
        wStream.on("error", (e: any) => {
          console.error(e.message);
          reject(false);
          throw new Error(e.message);
        });
        archive.on("finish", () => {
          resolve(true);
        });
        archive.on("error", (e: any) => {
          console.error(e.message);
          reject(false);
        });
      });
      promises.push(promise);
    }
    archive.finalize();
    return Promise.all(promises)
      .then(() => {
        return zipName;
      })
      .catch((e) => {
        console.error(e);
        throw new Error("Something went wrong, couldn't upload all files.");
      });
  }

  @Mutation(() => String || Error)
  async updateZipFile(
    @Ctx() { prisma }: MyContext,
    @Arg("prevname", () => String) prevname: string,
    @Arg("isTemp", () => Boolean) isTemp: boolean,
    @Arg("files", () => [GraphQLUpload]) files: FileUpload[]
  ): Promise<String | undefined> {
    try {
      unlinkSync(
        path.join(__dirname, `../uploads/${isTemp ? "temp/" : ""}`, prevname)
      );
    } catch (e) {
      throw new Error("Something went wrong, Couldn't create new zip file.");
    }
    const promises: Promise<boolean | string>[] = [];
    const archive = archiver("zip", { zlib: { level: 9 } });
    const wStream = createWriteStream(
      path.join(__dirname, `../uploads/${isTemp ? "temp/" : ""}`, prevname)
    );
    wStream.on("error", (e: any) => {
      throw new Error(
        e.message || "Something went wrong with creating new .zip file."
      );
    });
    archive.pipe(wStream);
    for(const file of files) {
      const { createReadStream, mimetype } = await file;
      const stream = createReadStream();
      let filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
      if (filename.includes("+")) {
        filename = filename.replace("+xml", "");
      }
      const promise = new Promise<string | boolean>((resolve, reject) => {
        archive.append(stream, { name: filename });
        archive.on("finish", () => {
          resolve(filename);
        });
        archive.on("error", () => {
          reject(false);
        });
      });
      promises.push(promise);
    }
    archive.finalize();
    return Promise.all(promises)
      .then(() => {
        return prevname;
      })
      .catch(() => {
        throw new Error("Something went wrong, couldn't update the .zip file.");
      });
  }

  @Mutation(() => Boolean)
  async moveFilesFromTemp(
    @Arg("filenames", () => [String]) filenames: string[]
  ): Promise<boolean> {
    for (const file of filenames) {
      rename(
        path.join(__dirname, "../uploads/temp/", file),
        path.join(__dirname, "../uploads/", file),
        (e) => {
          if (e) {
            throw new Error(
              "Something went wrong, Couldn't update the file path."
            );
          }
        }
      );
    }
    return true;
  }

  @Mutation(() => String || Error)
  async uploadSingleFile(
    @Arg("file", () => GraphQLUpload)
    { mimetype, createReadStream }: FileUpload,
    @Arg("isEdit", { defaultValue: false, nullable: true }) isEdit: boolean
  ): Promise<string | Error> {
    let filename = `file-${randomInt(100000)}.webp`;
    return new Promise((resolve, reject) => {
      const stream = createReadStream();
      if (mimetype.split("/")[0] === "image") {
        stream
          .pipe(
            sharp()
              .webp({
                quality: 50,
              })
              .on("error", (e: any) => {
                throw new Error(
                  e.message || "Couldn't prccess the uploaded image."
                );
              })
          )
          .pipe(
            createWriteStream(
              path.join(
                __dirname,
                `../../src/uploads/${isEdit ? "" : "temp/"}`,
                filename
              )
            )
          )
          .on("error", (e: any) => {
            console.error(e);
            reject(e);
          })
          .on("finish", () => resolve(filename));
      } else {
        stream
          .pipe(
            createWriteStream(
              path.join(
                __dirname,
                `../../src/uploads/${isEdit ? "" : "temp/"}`,
                filename
              )
            )
          )
          .on("error", (e: any) => {
            console.error(e);
            reject(e);
          })
          .on("finish", () => resolve(filename));
      }
    });
  }

  @Mutation(() => String, { nullable: true })
  async updateImage(
    @Arg("file", () => GraphQLUpload)
    { createReadStream }: FileUpload,
    @Arg("prevname", () => String) prevname: string,
    @Arg("isEdit", () => Boolean, { defaultValue: false, nullable: true })
    isEdit: boolean
  ): Promise<string> {
    try {
      unlinkSync(
        join(__dirname, `../uploads/${isEdit ? "" : "temp/"}` + prevname)
      );
    } catch (e) {}
    return new Promise((resolve, reject) => {
      const stream = createReadStream();
      stream
        .pipe(
          sharp()
            .webp({
              quality: 50,
            })
            .on("error", (e: any) => {
              throw new Error(
                e.message || "Couldn't prccess the uploaded image."
              );
            })
        )
        .pipe(
          createWriteStream(
            path.join(
              __dirname,
              `../uploads/${isEdit ? "" : "temp/"}`,
              prevname
            )
          )
        )
        .on("error", (e: any) => {
          reject(e);
        })
        .on("finish", async () => {
          resolve(prevname);
        });
    });
  }

  @Mutation(() => [String], { nullable: true })
  async uploadMultipleFiles(
    @Arg("files", () => [GraphQLUpload])
    files: FileUpload[],
    @Arg("isTemp" ,() => Boolean) isTemp: boolean = true
  ): Promise<string[]> {
    const filenames: string[] = [];
    for await (const file of files) {
      try {
        const { mimetype, createReadStream } = await file;
        let filename = `file-${randomInt(100000)}.${mimetype.split("/")[1]}`;
        if (filename.includes("+")) {
          filename = filename.replace("+xml", "");
        }
        const stream = createReadStream();
        stream.pipe(
          createWriteStream(
            path.join(__dirname, `../../src/uploads/${isTemp ? "temp/": ""}`, filename)
          )
        );
        filenames.push(filename);
      } catch (e) {
        console.error(e);
      }
    }
    return filenames;
  }

  @Mutation(() => Boolean)
  async deleteFile(
    @Arg("filename", () => String) filename: string,
    @Arg("isTemp", () => Boolean) isTemp: boolean
  ): Promise<boolean> {
    try {
      unlinkSync(
        join(__dirname, `../uploads/${isTemp ? "temp/" : ""}` + filename)
      );
    } catch (e) {
      throw new Error(
        e.message || "Something went wrong, couldn't delete the file."
      );
    }
    return true;
  }

  @Mutation(() => Boolean)
  async deleteFiles(
    @Arg("filenames", () => [String]) filenames: string[],
    @Arg("isTemp", () => Boolean) isTemp: boolean
  ): Promise<boolean> {
    for await (const filename of filenames) {
      if (filename) {
        unlink(
          path.join(
            __dirname,
            `../uploads/${isTemp ? "temp/" : ""}` + filename
          ),
          (e) => {
            if (e) {
              throw new Error(
                e.message || "Something went wrong, couldn't delete the file."
              );
            }
          }
        );
      }
    }
    return true;
  }
}
