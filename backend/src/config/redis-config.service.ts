import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Injectable()
export class RedisConfigService {
    constructor(private readonly connfigService: ConfigService) {}

    createRedisClientOptions(): RedisClientOptions | Promise<RedisClientOptions> {
        return {
            isGlobal: true,
            store: redisStore,
            socket: {
                host: this.connfigService.get('REDIS_HOST'),
                port: +this.connfigService.get('REDIS_PORT'),
            },
        };
    }
}
