import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Blog {
  declare id: number;

  declare createdAt: Date;

  declare updatedAt: Date;

  @Field()
  declare title: string;

  @Field()
  declare content: string;

  constructor(blog?: Partial<Blog>) {
    Object.assign(this, blog);
  }
}
