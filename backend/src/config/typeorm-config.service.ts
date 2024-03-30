import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Advertisement } from "src/advertisements/entities/advertisement.entity";
import { Category } from "src/categories/entities/category.entity";
import { Faq } from "src/faq/entities/faq.entity";
import { Address } from "src/users/entities/address.entity";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) { }
    
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            port: +this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_NAME'),
            synchronize: true,
            entities: [
                Faq,
                User,
                Address,
                Advertisement,
                Category
            ],
        }
    }
}