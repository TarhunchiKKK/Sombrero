import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors());

    // Swgger setup
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Sombrero Marketplace')
        .setDescription('Rest API documentation')
        .setVersion('1.0.0')
        .build();
    const documentation = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('documentation', app, documentation);

    await app.listen(3000);
}
bootstrap();
