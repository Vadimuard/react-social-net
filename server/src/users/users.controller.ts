import { Controller, Get, Post, Param, Body, NotAcceptableException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import { OAuth2Client } from 'google-auth-library';

@Controller('users')
export class UsersController {
  private readonly GOOGLE_CLIENT_ID: string;
  private googleClient: any;

  constructor(private readonly usersService: UsersService) {
    this.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    this.googleClient = new OAuth2Client(this.GOOGLE_CLIENT_ID);
  }

  @Post()
  async authorize(@Body() { token }): Promise<User> {
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: token,
        audience: this.GOOGLE_CLIENT_ID,
      });
      const { email, name, picture: imageUrl } = ticket.getPayload();
      return this.usersService.authorize({ email, name, imageUrl });
    } catch (err) {
      throw new NotAcceptableException();
    }
  }

  @Get(':id')
  findOne(@Param('_id') _id: string) {
    return this.usersService.findOne(_id);
  }
}
