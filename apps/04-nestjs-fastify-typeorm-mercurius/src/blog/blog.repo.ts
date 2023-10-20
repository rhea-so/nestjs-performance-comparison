import { Injectable } from "@nestjs/common";
import { Blog } from "./blog.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BlogRepo {
  @InjectRepository(Blog)
  private readonly repository!: Repository<Blog>;

  async findMany(limit: number): Promise<Blog[]> {
    return this.repository.find({ take: limit });
  }

  async save(blog: Blog): Promise<Blog> {
    return this.repository.save(blog);
  }
}
