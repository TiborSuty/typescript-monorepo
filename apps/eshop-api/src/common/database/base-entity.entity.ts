import { PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { ApiHideProperty } from '@nestjs/swagger';

/* A base class for all entities. */
export abstract class BaseEntity {
  @ApiHideProperty()
  @PrimaryKey()
  id!: number;

  @Property()
  idx: string = uuidv4();

  @Property()
  isActive = true;

  @Property({ hidden: true })
  isObsolete = false; // deleted status, hidden true removed the property during deserialization

  @Property()
  deletedAt?: Date;

  @Property()
  createdAt = new Date();

  @Property({
    onUpdate: () => new Date(),
    hidden: true,
  })
  updatedAt? = new Date();
}
