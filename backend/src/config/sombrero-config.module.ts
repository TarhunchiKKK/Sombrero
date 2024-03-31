import { Module } from "@nestjs/common";
import { TypeOrmConfigService } from "./typeorm-config.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule],
    providers: [TypeOrmConfigService],
})
export class SombreroConfigModule {}