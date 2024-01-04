import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}

  usersRepository(): Repository<User> {
    return this.dataSource.getRepository(User);
  }

  public async create(dto: UserDto): Promise<User> {
    return await this.usersRepository().save(dto);
  }
}
