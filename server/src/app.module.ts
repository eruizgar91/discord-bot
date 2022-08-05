import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PostsModule } from './posts/posts.module';
import { SignupsModule } from './signups/signups.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    SignupsModule,
    MongooseModule.forRoot('mongodb://localhost/nest-posts'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
