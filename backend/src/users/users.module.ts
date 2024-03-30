import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Address])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
