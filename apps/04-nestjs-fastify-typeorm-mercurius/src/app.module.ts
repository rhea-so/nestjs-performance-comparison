import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { Blog } from "./blog/blog.entity";
import { BlogModule } from "./blog/blog.module";
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from "@nestjs/mercurius";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123qwe",
      database: "performance-test",
      entities: [Blog],
      synchronize: true,
      logging: false,
      poolSize: 100,
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
