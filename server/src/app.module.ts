import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module'
import { SignupsModule } from './signups/signups.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventsModule,
    SignupsModule,
    MongooseModule.forRoot('mongodb://localhost/nest-posts'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
