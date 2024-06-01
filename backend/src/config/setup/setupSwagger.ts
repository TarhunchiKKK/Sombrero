import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(application: INestApplication<any>) {
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Sombrero Marketplace')
        .setDescription('Rest API documentation')
        .setVersion('1.0.0')
        .build();
    const documentation = SwaggerModule.createDocument(application, swaggerConfig);
    SwaggerModule.setup('documentation', application, documentation);
}
