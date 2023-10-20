import { DynamicModule } from "@nestjs/common";
import knex from "knex";

interface KnexModuleOptions {
  type: "mysql2";
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  pool: { min: number; max: number };
}

export class KnexModule {
  static forRoot(options: KnexModuleOptions): DynamicModule {
    return {
      global: true,
      module: KnexModule,
      providers: [
        {
          provide: "KNEX",
          useValue: knex({
            client: options.type,
            connection: {
              host: options.host,
              port: options.port,
              user: options.user,
              password: options.password,
              database: options.database,
              pool: options.pool,
            },
          }),
        },
      ],
      exports: ["KNEX"],
    };
  }
}
