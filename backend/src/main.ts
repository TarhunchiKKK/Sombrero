import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const fs = require('fs');

function createFilesStorage() {
    if (!fs.existsSync(process.env.FILES_STORAGE)) {
        fs.mkdirSync(process.env.FILES_STORAGE);
    }
}

async function bootstrap() {
    createFilesStorage();
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
