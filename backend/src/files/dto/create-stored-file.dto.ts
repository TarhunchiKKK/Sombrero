import { ApiProperty } from '@nestjs/swagger';
import { ScreenSizes } from '../enums/screen-size.enum';
import { IsEnum } from 'class-validator';

export class CreateStoredFileDto {
    @ApiProperty({ enum: ScreenSizes, description: 'Screen size for this image' })
    @IsEnum(ScreenSizes, { message: 'No such screen size' })
    screenSize: ScreenSizes;
}
