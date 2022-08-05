import { Module } from '@nestjs/common';
import { SignupsController } from './signups.controller';
import { SignupsService } from './signups.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupSchema } from './schemas/signup.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Signup', schema: SignupSchema }])],
  controllers: [SignupsController],
  providers: [SignupsService],
})
export class SignupsModule {}
