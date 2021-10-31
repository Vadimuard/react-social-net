import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async authorize(user: User): Promise<User> {
    let localUser = await this.findOne(user.email);
    if (!localUser) {
      localUser = await this.create(user);
    }
    return localUser;
  }

  create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}
