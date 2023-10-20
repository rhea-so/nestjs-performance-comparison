import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { Blog } from "./blog/blog.entity";
import { BlogModule } from "./blog/blog.module";
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from "@nestjs/mercurius";
import { MikroOrmModule } from "@mikro-orm/nestjs";

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "123qwe",
      dbName: "performance-test",
      entities: [Blog],
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
