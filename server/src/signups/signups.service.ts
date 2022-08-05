import { Injectable } from '@nestjs/common';
import { Signup } from './interfaces/Signup';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSignupDto } from './dto/create-signup.dto';

@Injectable()
export class SignupsService {
  constructor(@InjectModel('Signup') private signupModel: Model<Signup>) {}

  async getSignups(): Promise<Signup[]> {
    return await this.signupModel.find();
  }

  async getSignup(id: string): Promise<Signup> {
    return await this.signupModel.findById(id);
  }

  async createSignup(Signup: CreateSignupDto): Promise<Signup> {
    const newSignup = new this.signupModel(Signup);
    return await newSignup.save();
  }

  async updateSignup(id: string, Signup: CreateSignupDto): Promise<Signup> {
    return await this.signupModel.findByIdAndUpdate(id, Signup, { new: true });
  }

  async deleteSignup(id: string): Promise<Signup> {
    return await this.signupModel.findByIdAndRemove(id);
  }
}
