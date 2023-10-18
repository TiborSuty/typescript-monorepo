import { Migration } from '@mikro-orm/migrations';

export class Migration20220430160032 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" serial primary key, "idx" varchar(255) not null, "is_active" boolean not null, "is_obsolete" boolean not null, "deleted_at" timestamptz(0) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "username" varchar(255) not null, "email" varchar(255) not null, "avatar" varchar(255) not null, "password" varchar(255) not null, "role" text[] not null default \'{AUTHOR}\', "mobile_number" varchar(255) null, "is_verified" boolean not null);'
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }
}
