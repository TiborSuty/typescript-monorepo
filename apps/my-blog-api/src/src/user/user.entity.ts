import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Role } from '../role/role.entity';
import { Post } from '../post/post.entity';
import { Auth } from '../auth/auth.entity';
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

  @OneToMany((_type) => Auth, (socialProvider) => socialProvider.user)
  socialProviders: Auth;

  @JoinTable()
  @ManyToMany(() => Role, (roles) => roles.users, {
    cascade: true,
  })
  roles?: Role[];

  @ManyToOne(() => Post, (posts) => posts.users)
  posts?: Post;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}
