import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Roles {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 20 })
  name: string;

  @ManyToMany(() => User, (users) => users.roles)
  users: User[];
}
