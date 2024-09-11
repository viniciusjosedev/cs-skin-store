import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import log from './log';

async function bootstrap() {
  const port = process.env.NODE_PORT || 8080;

  const urlsPermitted = process.env.FRONTEND_URL
    ? [process.env.FRONTEND_URL]
    : '*';

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: urlsPermitted,
      credentials: true,
    },
  });
  await app.listen(port, () => log.info(`Server running in port ${port}`));
}
bootstrap();
