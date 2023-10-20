import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import helmet from "@fastify/helmet";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`, "unpkg.com"],
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          "cdn.jsdelivr.net",
          "fonts.googleapis.com",
          "unpkg.com",
        ],
        fontSrc: [`'self'`, "fonts.gstatic.com", "data:"],
        imgSrc: [`'self'`, "data:", "cdn.jsdelivr.net"],
        scriptSrc: [
          `'self'`,
          `https: 'unsafe-inline'`,
          `cdn.jsdelivr.net`,
          `'unsafe-eval'`,
        ],
      },
    },
  });
  await app.listen(3000);
}

bootstrap();
