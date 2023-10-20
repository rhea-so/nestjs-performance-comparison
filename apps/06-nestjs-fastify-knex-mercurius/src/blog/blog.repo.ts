import { Inject, Injectable } from "@nestjs/common";
import { Blog } from "./blog.entity";
import knex, { Knex } from "knex";

@Injectable()
export class BlogRepo {
  constructor(@Inject("KNEX") private readonly knex: Knex) {}

  async findMany(limit: number): Promise<Blog[]> {
    return await this.knex.select("*").from("Blogs").limit(limit);
  }

  async save(blog: Blog): Promise<Blog> {
    const [id] = await this.knex("Blogs").insert(blog);
    return this.knex.select("*").from("Blogs").where({ id }).first();
  }
}
