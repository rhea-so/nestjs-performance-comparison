import { Entity, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "@nestjs/graphql";

@Entity({ tableName: "Blogs" })
@ObjectType()
export class Blog {
  @Property({ primary: true, autoincrement: true })
  declare id: number;

  @Property({
    fieldName: "createdAt",
    onCreate: () => new Date(),
  })
  declare createdAt: Date;

  @Property({
    fieldName: "updatedAt",
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  declare updatedAt: Date;

  @Property()
  @Field()
  declare title: string;

  @Property()
  @Field()
  declare content: string;

  constructor(blog?: Partial<Blog>) {
    Object.assign(this, blog);
  }
}
