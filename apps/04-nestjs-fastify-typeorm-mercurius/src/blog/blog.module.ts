import { Module } from "@nestjs/common";
import { Blog } from "./blog.entity";
import { BlogRepo } from "./blog.repo";
import { BlogResolver } from "./blog.resolver";
import { BlogService } from "./blog.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogRepo, BlogResolver, BlogService],
})
export class BlogModule {}
