import { Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertisementsService {
  constructor(
    @InjectRepository(Advertisement)
    private readonly advertisementsRepository: Repository<Advertisement>
  ) {}
  
  create(createAdvertisementDto: CreateAdvertisementDto) {
    return 'This action adds a new advertisement';
  }

  findAll() {
    return `This action returns all advertisements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advertisement`;
  }

  update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
    return `This action updates a #${id} advertisement`;
  }

  remove(id: number) {
    return `This action removes a #${id} advertisement`;
  }
}
