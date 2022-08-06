import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SignupsService } from './signups.service';
import { Signup } from './interfaces/Signup';

import { CreateSignupDto } from './dto/create-signup.dto';

@Controller('signups')
export class SignupsController {
  constructor(private signupsService: SignupsService) {}

  @Get()
  getSignups(): Promise<Signup[]> {
    return this.signupsService.getSignups();
  }

  @Get(':signupId')
  getSignup(@Param('signupId') signupId: string): Promise<Signup> {
    return this.signupsService.getSignup(signupId);
  }

  @Get('/user/:userId')
  getSignupByUser(@Param('userId') userId: string): Promise<Signup> {
    return this.signupsService.getSignupByUser(userId);
  }
  

  @Post()
  createSignup(@Body() signup: CreateSignupDto): Promise<Signup> {
    console.log(signup)
    return this.signupsService.createSignup(signup);
  }

  @Put(':signupId')
  updateSignup(
    @Body() signup: CreateSignupDto,
    @Param('signupId') signupId,
  ): Promise<Signup> {
    return this.signupsService.updateSignup(signupId, signup);
  }

  @Delete(':signupId')
  deleteSignup(@Param('signupId') signupId): Promise<Signup> {
    return this.signupsService.deleteSignup(signupId);
  }
}
