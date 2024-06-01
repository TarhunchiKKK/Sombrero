import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfigOptions: JwtModuleOptions = {
    secret: process.env.JWT_SECRET || 'kfjxvnhjtgykucjkrzvjdxtmchxjuamvnt',
    signOptions: {
        expiresIn: '30d',
    },
};
