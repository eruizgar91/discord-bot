import { Injectable } from '@nestjs/common';
import { BlogPost } from './interfaces/Post';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private postModel: Model<BlogPost>) {}

  async getPosts(): Promise<BlogPost[]> {
    return await this.postModel.find();
  }

  async getPost(id: string): Promise<BlogPost> {
    return await this.postModel.findById(id);
  }

  async createPost(post: CreatePostDto): Promise<BlogPost> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async updatePost(id: string, post: CreatePostDto): Promise<BlogPost> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }

  async deletePost(id: string): Promise<BlogPost> {
    return await this.postModel.findByIdAndRemove(id);
  }
}
