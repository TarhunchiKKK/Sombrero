import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const fs = require('fs');
const cors = require('cors');

function createFilesStorage() {
    if (!fs.existsSync(process.env.FILES_STORAGE)) {
        fs.mkdirSync(process.env.FILES_STORAGE);
    }
}

async function bootstrap() {
    createFilesStorage();
    const app = await NestFactory.create(AppModule);
    app.use(cors());
    await app.listen(3000);
}
bootstrap();
