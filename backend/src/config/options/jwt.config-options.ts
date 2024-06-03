import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfigOptions: JwtModuleOptions = {
    global: true,
    secret: process.env.JWT_SECRET || 'kfjxvnhjtgykucjkrzvjdxtmchxjuamvnt',
    signOptions: {
        expiresIn: '30d',
    },
};
