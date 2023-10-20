import { Module } from "@nestjs/common";
import { BlogRepo } from "./blog.repo";
import { BlogResolver } from "./blog.resolver";
import { BlogService } from "./blog.service";

@Module({
  providers: [BlogRepo, BlogResolver, BlogService],
})
export class BlogModule {}
