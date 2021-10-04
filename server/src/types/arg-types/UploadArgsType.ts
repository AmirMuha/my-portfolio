import { ReadStream } from "fs-capacitor";
import { Stream } from "stream";
import { ArgsType, Field, InputType } from "type-graphql";

type CreateReadSteamFn = () => Stream;

@InputType()
export class UploadInputType {
  @Field(() => String)
  filename: string;

  @Field(() => String)
  mimetype: string;

  @Field(() => String)
  encoding: string;

  @Field(() => () => Stream)
  createReadStream: () => Stream;
}
@ArgsType()
export class UploadArgsType {
  @Field(() => UploadInputType)
  file: UploadInputType;
}
