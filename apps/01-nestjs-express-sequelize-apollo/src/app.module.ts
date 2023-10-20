import { ApolloFederationDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { SequelizeModule } from "@nestjs/sequelize";
import { Blog } from "./blog/blog.entity";
import { BlogModule } from "./blog/blog.module";

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
    }),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: { path: "schema.gql", federation: 2 },
    }),
    BlogModule,
  ],
})
export class AppModule {}
