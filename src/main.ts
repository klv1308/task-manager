import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
//import { LoggerMiddleware } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // app.use(LoggerMiddleware); Global Middleware
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Task manager')
    .setDescription('The task manager API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(configService.get<string>('port'));
}
bootstrap();
