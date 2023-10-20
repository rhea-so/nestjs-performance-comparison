import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { Blog } from "./blog/blog.entity";
import { BlogModule } from "./blog/blog.module";
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from "@nestjs/mercurius";
import { KnexModule } from "./knex/knex.module";

@Module({
  imports: [
    KnexModule.forRoot({
      type: "mysql2",
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "123qwe",
      database: "performance-test",
      pool: { min: 5, max: 100 },
    }),
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: { path: "schema.gql", federation: 2 },
      graphiql: true,
    }),
    BlogModule,
  ],
})
export class AppModule {}
