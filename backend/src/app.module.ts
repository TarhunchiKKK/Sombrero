import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [
    CategoriesModule, 
    UsersModule, 
    AdvertisementsModule, FaqModule
  ],
})
export class AppModule {}
