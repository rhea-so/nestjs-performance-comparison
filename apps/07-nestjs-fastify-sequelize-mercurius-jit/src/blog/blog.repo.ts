import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Blog } from "./blog.entity";

@Injectable()
export class BlogRepo {
  @InjectModel(Blog)
  private readonly entity!: typeof Blog;

  async findMany(limit: number): Promise<Blog[]> {
    return this.entity.findAll({ limit });
  }

  async save(blog: Blog): Promise<Blog> {
    return blog.save();
  }
}
