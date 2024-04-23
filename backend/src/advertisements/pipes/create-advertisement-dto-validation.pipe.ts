import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateAdvertisementDto } from '../dto/create-advertisement.dto';
import { AdvertisementValidator } from './advertisement.validator';

export class CreateAdvertisementDtoValidatioonPipe
    implements PipeTransform<CreateAdvertisementDto>
{
    private readonly advertisementValidator: AdvertisementValidator;

    constructor() {
        this.advertisementValidator = new AdvertisementValidator();
    }

    transform(value: CreateAdvertisementDto, metadata: ArgumentMetadata) {
        this.advertisementValidator.validateTitle(value.title);
        this.advertisementValidator.validateDescription(value.description);
        this.advertisementValidator.validatePrice(value.price);
        this.advertisementValidator.validateCategory(value.category);
        this.advertisementValidator.validateVendor(value.vendor);
        return value;
    }
}
