import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  @Get()
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  @Get()
  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  update() {}

  remove() {}
}
