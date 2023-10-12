import {
  BeforeInsert,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Roles } from '../../roles/entities/roles.entity';
import { Posts } from '../../posts/entities/posts.entity';
import { IsEmail, MinLength } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity()
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @MinLength(3)
  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column()
  username: string;

  @IsEmail()
  @Field()
  @Column({ unique: true })
  email: string;

  @MinLength(6)
  @Column({ length: 60 })
  password: string;

  @JoinTable()
  @ManyToMany(() => Roles, (roles) => roles.users, {
    cascade: true,
  })
  roles?: Roles[];

  @ManyToOne(() => Posts, (posts) => posts.users)
  posts?: Posts;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}
