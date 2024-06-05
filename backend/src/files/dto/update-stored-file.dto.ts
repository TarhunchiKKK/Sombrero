import { IsEnum, IsOptional } from 'class-validator';
import { ScreenSizes } from '../enums/screen-size.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStoredFileDto {
    @ApiProperty({ enum: ScreenSizes, description: 'Screen size for this image' })
    @IsOptional()
    @IsEnum(ScreenSizes, { message: 'No such screen size' })
    screenSize: ScreenSizes;
}
