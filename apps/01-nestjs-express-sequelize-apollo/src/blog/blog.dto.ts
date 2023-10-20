import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBlogInput {
  @Field()
  title!: string;

  @Field()
  content!: string;
}
