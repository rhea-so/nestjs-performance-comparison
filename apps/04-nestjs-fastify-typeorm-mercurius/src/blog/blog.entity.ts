import { Field, ObjectType } from "@nestjs/graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "Blogs" })
@ObjectType()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn()
  declare id: number;

  @CreateDateColumn({ name: "createdAt" })
  declare createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  declare updatedAt: Date;

  @Column()
  @Field()
  declare title: string;

  @Column()
  @Field()
  declare content: string;

  constructor(blog?: Partial<Blog>) {
    super();
    Object.assign(this, blog);
  }
}
