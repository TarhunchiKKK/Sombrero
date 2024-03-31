import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateAdvertisementDto } from '../dto/create-advertisement.dto';
import { AdvertisementValidator } from './advertisement.validator';
import { UpdateAdvertisementDto } from '../dto/update-advertisement.dto';

export class UpdateAdvertisementDtoValidatioonPipe
    implements PipeTransform<UpdateAdvertisementDto>
{
    private readonly advertisementValidator: AdvertisementValidator;

    constructor() {
        this.advertisementValidator = new AdvertisementValidator();
    }

    transform(value: UpdateAdvertisementDto, metadata: ArgumentMetadata) {
        if (value.price) {
            this.advertisementValidator.validatePrice(value.price);
        }
        return value;
    }
}
