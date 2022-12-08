import {Column, Entity, PrimaryGeneratedColumn, Table} from 'typeorm'
@Entity({name:'users'})
export class Users { 
    @PrimaryGeneratedColumn()
    id: number; 
    @Column()
    email:string;
    @Column()
    first_name:string; 
    @Column()
    last_name:string; 
    @Column()
    password: string;  
    @Column()
    created_at:Date
    
}