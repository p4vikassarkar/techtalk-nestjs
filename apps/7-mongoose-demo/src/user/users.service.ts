import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async login(email: string, password: string) {
    const user = await this.model.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
  }

  async signup(email: string, password: string) {
    const existingUser = await this.model.findOne({ email });
    if (existingUser) {
      throw new UnauthorizedException('Email Already registered');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.model.create({ email, password: hashedPassword });
    return this.model.create(user);
  }

  async update(id: string, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.model.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.model.findByIdAndDelete(id);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  find(query: object) {
    return this.model.find({ query });
  }
}
