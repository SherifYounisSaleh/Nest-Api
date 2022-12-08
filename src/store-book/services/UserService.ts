import { Injectable, Logger } from "@nestjs/common";
import {Users} from '../Entity/users';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { identity } from "rxjs";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        ) {}
        findAll(): Promise<Users[]> {
        return this.usersRepository.find();
        } 
        findOne(id: number): Promise<Users> {
        return this.usersRepository.findOneBy({id});
        }

        async update(id: number,user: Users): Promise<Users> {
            
            let users=await this.usersRepository.findOneBy({id})
            
            Logger.log(`update service ${id} `)
             await this.usersRepository.update(id,
                {id:user.id,
                email:user.email,
                first_name:user.first_name,
                last_name:user.last_name,
                password:user.password,
                created_at:user.created_at
            });
             return users
               
        }

        async delete(id: number): Promise<Users> {
            let currentUser= await this.usersRepository.findOneBy({id});
           
            return await this.usersRepository.remove(currentUser)
        }
    
        async insert(user:Users): Promise<Users> {
            
           
            return await this.usersRepository.save(user)
        }
    }
