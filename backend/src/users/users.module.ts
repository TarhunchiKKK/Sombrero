import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { User } from './entities/user.entity';
import { FilesModule } from 'src/files/files.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
    imports: [TypeOrmModule.forFeature([User, Address]), RolesModule, FilesModule],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
