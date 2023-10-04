import { ControllerDecorator } from '../../common/decorators/controller.decorator';
import { UserService } from './user.service';
import {
  Body,
  Get,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
} from '@nestjs/common';
import { SwaggerDecorator } from '../../common/decorators/swagger-api.decorator';
import { ApiFile } from '../../common/decorators/api-file.decorator';
import { CheckPolicies } from '../../lib/casl/policies.decorator';
import { GenericPolicyHandler } from '../../lib/casl/policies';
import { User } from './user.entity';
import { Action } from '../../lib/casl/casl-ability.factory';
import { Roles } from '../../common/types/enums/permission.enum';
import { UserRegistrationDto } from './dtos/user-registration.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ApiPaginatedResponse } from '../../common/swagger/ApiPaginated';
import { PageOptionsDto } from '../../common/classes/pagination';
import { Pagination } from '../../lib/pagination';

@ControllerDecorator('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Users list' })
  @ApiPaginatedResponse(User)
  @Get()
  getMany(@Query() pageOptionsDto: PageOptionsDto): Promise<Pagination<User>> {
    // @ts-ignore
    return 'test';
  }

  @Post('register')
  @SwaggerDecorator({
    operation: 'Create user',
    badRequest: 'User already registered with email.',
  })
  @ApiFile('avatar')
  @CheckPolicies(new GenericPolicyHandler(User, Action.Create))
  async publicRegistration(
    @UploadedFile(ParseFilePipe) image: Express.Multer.File,
    @Body() dto: UserRegistrationDto
  ) {
    return this.userService.createOne({
      ...dto,
      roles: [Roles.AUTHOR],
      image,
    });
  }
}
