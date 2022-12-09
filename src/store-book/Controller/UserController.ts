import { Controller, Get, Render, Logger,Res ,Param, Patch, Body, Delete,Post ,ParseIntPipe} from '@nestjs/common';
import { throws } from 'assert';
import {UserService} from  '../services/UserService'
import {Users} from '../Entity/users'

@Controller('/user')


export class UserController {
    constructor(private readonly usersService: UserService) { }
    log =new Logger(UserController.name)
    @Get('/getAll')
    @Render('user/getAll')
    async getAll(@Res() response) {
        this.log.log(__dirname +'../store-book/Entity/users.js')
        const viewData = await this.usersService.findAll();
        this.log.log(await this.usersService.findAll());
        
         response.status(200).send(viewData);
        //     viewData: viewData,
        //     };
            
        
    }

    @Get('/get/:id')
    @Render('user/get/:id')
    async get(@Param('id',ParseIntPipe) id:number,@Res() response) {
        this.log.log(__dirname +'../store-book/Entity/users.js')
        const viewData = await this.usersService.findOne(id);
        this.log.log(await this.usersService.findOne(id));
        
         response.status(200).send(viewData);
           
    }
    @Patch('/update/:id')
    @Render('user/update/:id')
    async update(@Param('id',ParseIntPipe) id:number,@Body() Body: Users,@Res() response) {
        
        this.log.log(`${Body.id} - ${Body.email} -${Body.first_name} - ${Body.last_name} - ${Body.created_at}` );
         await this.usersService.update(id,Body);
         response.status(200).send(`the user id ${id} was updated`);
           
    }

    @Delete('/delete/:id')
    @Render('user/delete/:id')
    async delete(@Param('id',ParseIntPipe) id:number,@Res() response) {
         this.usersService.delete(id)
         response.status(200).send(`the user id ${id} was deleted`);
           
    }

    @Post('/add/')
    @Render('user/add/')
    async add(@Body() Body,@Res() response): Promise<void> {
        this.log.log(__dirname +'../store-book/Entity/users.js')
         
        this.usersService.insert(Body)
         response.status(200).send(`the user id ${Body.id} was inserted`);
           
    }
}      
