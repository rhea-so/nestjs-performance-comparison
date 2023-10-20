import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Model, Table } from "sequelize-typescript";

@Table
@ObjectType()
export class Blog extends Model {
  @Column
  @Field()
  declare title: string;

  @Column
  @Field()
  declare content: string;
}
