import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors());

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Sombrero')
        .setDescription('Simple marketplace')
        .setVersion('1.0.0')
        .addTag('TarhunchicKKK')
        .build();
    const documentation = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, documentation);

    await app.listen(3000);
}
bootstrap();
