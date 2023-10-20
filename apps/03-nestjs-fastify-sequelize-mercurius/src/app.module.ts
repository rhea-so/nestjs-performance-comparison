import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { SequelizeModule } from "@nestjs/sequelize";
import { Blog } from "./blog/blog.entity";
import { BlogModule } from "./blog/blog.module";
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from "@nestjs/mercurius";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123qwe",
      database: "performance-test",
      models: [Blog],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
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
