import { Blog } from "./blog.entity";

export class BlogMapper {
  static toEntity(row: any): Blog {
    return new Blog({
      id: row.id,
      title: row.title,
      content: row.content,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    });
  }

  static toPersistence(blog: Blog): any {
    return {
      id: blog.id,
      title: blog.title,
      content: blog.content,
    };
  }
}
