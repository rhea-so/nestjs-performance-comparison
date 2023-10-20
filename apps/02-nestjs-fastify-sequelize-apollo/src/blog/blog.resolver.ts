import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Blog } from "./blog.entity";
import { CreateBlogInput } from "./blog.dto";
import { BlogService } from "./blog.service";

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly service: BlogService) {}

  @Query(() => [Blog])
  async blogs(
    @Args("count", { type: () => Int }) count: number
  ): Promise<Blog[]> {
    return this.service.findMany(count);
  }

  @Mutation(() => Blog)
  async createBlog(@Args("input") input: CreateBlogInput): Promise<Blog> {
    return this.service.createBlog(input);
  }
}
