import { BadRequestException } from '@nestjs/common';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';

export class AdvertisementValidator {
    validateTitle(title: string) {
        if (title === '' || title === undefined || title === null) {
            throw new BadRequestException('Title must be provided');
        }
    }

    validateDescription(description: string) {
        if (description === '' || description === undefined || description === null) {
            throw new BadRequestException('Description must be provided');
        }
    }

    validatePrice(price: number) {
        if (price === undefined || price === null) {
            throw new BadRequestException('Price must be provided');
        }

        if (price <= 0) {
            throw new BadRequestException('Price must be more than 0');
        }
    }

    validateCategory(category: Category) {
        if (category === null || category === undefined) {
            throw new BadRequestException('Category must be provided');
        }
    }

    validateVendor(vendor: User) {
        if (vendor === null || vendor === undefined) {
            throw new BadRequestException('Vendor must be provided');
        }
    }
}
