import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreBookModule } from './store-book/store-book.module';
import  {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from './store-book/Entity/users'



@Module({
  imports: [StoreBookModule,TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Sherif3m@',
      database: 'FWD',
      entities:[Users],//'D:/Node projects/test-typeorm-Nest/nest-postgres/dist/store-book/Entity/users.js'
     
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
