import { Inject, Injectable } from "@nestjs/common";
import { Blog } from "./blog.entity";
import knex, { Knex } from "knex";
import { BlogMapper } from "./blog.mapper";

@Injectable()
export class BlogRepo {
  constructor(@Inject("KNEX") private readonly knex: Knex) {}

  async findMany(limit: number): Promise<Blog[]> {
    return (await this.knex.select("*").from("Blogs").limit(limit)).map((row) =>
      BlogMapper.toEntity(row)
    );
  }

  async save(blog: Blog): Promise<Blog> {
    const [id] = await this.knex("Blogs").insert(
      BlogMapper.toPersistence(blog)
    );
    return BlogMapper.toEntity(
      await this.knex.select("*").from("Blogs").where({ id }).first()
    );
  }
}
