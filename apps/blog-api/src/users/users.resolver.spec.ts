import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserInput, UpdateUserInput, UsersArgs } from './dto';
import { UsersResolver } from './users.resolver';
import { UserService } from './user.service';

const usersArgs: UsersArgs = {
  offset: 0,
  limit: 25,
};

const createUserInput: CreateUserInput = {
  name: 'user #1',
  email: 'test@example.com',
  username: 'username #1',
  password: 'secret',
  roles: [],
};

const updateUserInput: UpdateUserInput = {
  name: 'user update',
  email: 'test@example.com',
  username: 'username update',
  password: 'secret123',
};

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UserService,
          useFactory: () => ({
            findAll: jest.fn().mockResolvedValue({
              name: 'user #1',
              email: 'test@example.com',
              username: 'username #1',
              password: 'secret',
              id: '1',
            }),
            update: jest.fn().mockResolvedValue({
              name: 'user update',
              email: 'test@example.com',
              username: 'username update',
              password: 'secret123',
            }),
            findOneById: jest.fn(() => []),
            create: jest.fn(() => createUserInput),
            remove: jest.fn(() => {}),
          }),
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('users()', () => {
    it('should call method findAll in UserService', async () => {
      await resolver.users(usersArgs);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('user()', () => {
    it('should call method findOneById in UserService id with correct value', async () => {
      await resolver.user('anyid');
      expect(service.findOneById).toHaveBeenCalled();
    });

    it('should return a exception when doesnt found a user by id', async () => {
      service.findOneById = jest.fn().mockReturnValue(null);
      const userNotFound = resolver.user('not correct id');
      expect(userNotFound).rejects.toThrow(NotFoundException);
    });
  });

  describe('createUser()', () => {
    it('should call method create in UserService with correct values', async () => {
      const createSpy = jest.spyOn(service, 'create');
      await resolver.createUser(createUserInput);
      expect(createSpy).toHaveBeenCalledWith(createUserInput);
    });
  });

  describe('updateUser()', () => {
    it('should call method update in UserService with correct values', async () => {
      const updateSpy = jest.spyOn(service, 'update');
      await resolver.updateUser('anyid', updateUserInput);
      expect(updateSpy).toHaveBeenCalledWith('anyid', updateUserInput);
    });
  });

  describe('removeUser()', () => {
    it('should call method remove in UserService with correct value', async () => {
      const deleteSpy = jest.spyOn(service, 'remove');
      await resolver.removeUser('anyid');
      expect(deleteSpy).toHaveBeenCalledWith('anyid');
    });
  });
});
