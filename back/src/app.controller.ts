import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from './users/users.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('index')
  root() {
    return;
  }

  @Post('/send')
  send(@Body() dto: UserDto, @Res() res: Response) {
    this.usersService.create(dto);
    res.redirect('/');
  }
}
