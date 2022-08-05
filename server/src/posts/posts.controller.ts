import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { BlogPost } from './interfaces/Post';

import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts(): Promise<BlogPost[]> {
    return this.postsService.getPosts();
  }

  @Get(':postId')
  getPost(@Param('postId') postId: string): Promise<BlogPost> {
    return this.postsService.getPost(postId);
  }

  @Post()
  createPost(@Body() post: CreatePostDto): Promise<BlogPost> {
    return this.postsService.createPost(post);
  }

  @Put(':postId')
  updatePost(
    @Body() post: CreatePostDto,
    @Param('postId') postId,
  ): Promise<BlogPost> {
    return this.postsService.updatePost(postId, post);
  }

  @Delete(':postId')
  deletePost(@Param('postId') postId): Promise<BlogPost> {
    return this.postsService.deletePost(postId);
  }
}
