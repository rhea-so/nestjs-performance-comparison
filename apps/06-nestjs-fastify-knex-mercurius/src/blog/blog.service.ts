import { Injectable } from "@nestjs/common";
import { BlogRepo } from "./blog.repo";
import { CreateBlogInput } from "./blog.dto";
import { Blog } from "./blog.entity";

@Injectable()
export class BlogService {
  constructor(private readonly repo: BlogRepo) {}

  async findMany(limit: number): Promise<Blog[]> {
    return this.repo.findMany(limit);
  }

  async createBlog(input: CreateBlogInput): Promise<Blog> {
    const { title, content } = input;
    const blog: Blog = new Blog({ title, content });
    return this.repo.save(blog);
  }
}
