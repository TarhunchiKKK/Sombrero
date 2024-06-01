import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { FilesModule } from 'src/files/files.module';
import { RedisClientOptions } from 'redis';
import { RedisConfigOptions } from 'src/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        TypeOrmModule.forFeature([Contact]),
        CacheModule.register<RedisClientOptions>(RedisConfigOptions),
        FilesModule,
    ],
    controllers: [ContactsController],
    providers: [ContactsService],
})
export class ContactsModule {}
