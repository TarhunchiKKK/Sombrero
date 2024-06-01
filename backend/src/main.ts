import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupFilesStorage, setupSwagger } from './config';

const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors());

    setupSwagger(app);
    setupFilesStorage();

    await app.listen(3000);
}

bootstrap();
