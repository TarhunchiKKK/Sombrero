import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateFaqDto {
    @IsOptional()
    @IsNotEmpty()
    question?: string;

    @IsOptional()
    @IsNotEmpty()
    answer?: string;
}
