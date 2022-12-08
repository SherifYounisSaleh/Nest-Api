import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users} from './Entity/users';
import { UserController } from './Controller/UserController';
import { UserService } from './services/UserService';

@Module({
   imports: [TypeOrmModule.forFeature([Users])],
   providers: [UserService],
   controllers: [UserController],
})
export class StoreBookModule {}
