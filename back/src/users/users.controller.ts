import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';

@Controller({ path: 'users' })
export class UsersController {
  @Inject(UsersService)
  private readonly service: UsersService;

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: UserDto): Promise<void> {
    await this.service.create(dto);
  }
}
