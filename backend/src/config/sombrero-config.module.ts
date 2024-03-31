import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './typeorm-config.service';
import { ConfigModule } from '@nestjs/config';
import { JwtConfigService } from './jwt-config.service';
import { RedisConfigService } from './redis-config.service';

@Module({
    imports: [ConfigModule],
    providers: [TypeOrmConfigService, JwtConfigService, RedisConfigService],
    exports: [TypeOrmConfigService, JwtConfigService, RedisConfigService],
})
export class SombreroConfigModule {}
