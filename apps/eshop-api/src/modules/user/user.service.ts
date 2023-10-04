import { CreateUserDto } from './dtos/create-user.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { BaseRepository } from '../../common/database/base.repository';
import { MikroORM } from '@mikro-orm/core';
import { I18nService } from 'nestjs-i18n';
import { CloudinaryService } from '../../lib/cloudinary/cloudinary.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: BaseRepository<User>,
    private readonly orm: MikroORM,
    private readonly i18nService: I18nService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  async createOne(
    dto: CreateUserDto & { image: Express.Multer.File }
  ): Promise<User> {
    const userExist = await this.userRepository.findOne({
      email: dto.email,
    });

    if (userExist) {
      throw new BadRequestException(
        this.i18nService.t('exception.USER_EMAIL_EXISTS')
      );
    }

    const { image, ...rest } = dto;
    const user = this.userRepository.create(rest);

    await this.orm.em.transactional(async (em) => {
      const { url } = await this.cloudinaryService.uploadImage(image);

      // cloudinary gives a url key on response that is the full url to file

      user.avatar = url;

      await em.persistAndFlush(user);
    });

    return user;
  }
}
