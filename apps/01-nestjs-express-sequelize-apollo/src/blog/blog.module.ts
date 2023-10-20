import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Blog } from "./blog.entity";
import { BlogRepo } from "./blog.repo";
import { BlogResolver } from "./blog.resolver";
import { BlogService } from "./blog.service";

@Module({
  imports: [SequelizeModule.forFeature([Blog])],
  providers: [BlogRepo, BlogResolver, BlogService],
})
export class BlogModule {}
