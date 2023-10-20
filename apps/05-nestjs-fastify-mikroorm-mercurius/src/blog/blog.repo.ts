import { Injectable } from "@nestjs/common";
import { Blog } from "./blog.entity";
import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityManager, EntityRepository } from "@mikro-orm/core";

@Injectable()
export class BlogRepo {
  constructor(
    private readonly em: EntityManager,
    @InjectRepository(Blog)
    private readonly repository: EntityRepository<Blog>
  ) {}

  async findMany(limit: number): Promise<Blog[]> {
    return this.repository.find({}, { limit });
  }

  async save(blog: Blog): Promise<Blog> {
    await this.em.persist(blog).flush();
    return blog;
  }
}
