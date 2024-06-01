import * as redisStore from 'cache-manager-redis-store';

export const RedisConfigOptions = {
    isGlobal: true,
    store: redisStore,
    socket: {
        host: process.env.REDIS_HOST || 'localhost',
        port: +process.env.REDIS_PORT || 6379,
    },
};
