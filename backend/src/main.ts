import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import log from './log';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => log.info(`Server running in port ${port}`));
}
bootstrap();
