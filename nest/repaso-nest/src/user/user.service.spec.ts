import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';


describe('UserService', () => {
  let service: UserService;
  let userModelMock: {
    findById: jest.Mock;
    create: jest.Mock;
  };

  beforeEach(async () => {
    userModelMock = {
      findById: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: 'USER_MODEL',
          useValue: userModelMock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error if the user is not found', async () => {
    // arrange
    userModelMock.findById.mockResolvedValue(null);

    // act
    const result = service.findOne('1');

    // assert
    await expect(result).rejects.toThrow(NotFoundException);
  });

  it('should return the user if it exists', async () => {
    // arrange
    const expectedUser = {
      email: 'test@example.com',
      password: '123456',
    };
    userModelMock.findById.mockResolvedValue(expectedUser);

    // act
    const user = await service.findOne('1');

    // assert
    expect(user).toEqual(expectedUser);
    expect(userModelMock.findById).toHaveBeenCalledWith('1');
  });

  it('should create a user', async () => {
    // arrange
    const createUserDto = {
      email: 'new@example.com',
      password: '123456',
    };
    const createdUser = {
      _id: 'abc123',
      ...createUserDto,
    };
    userModelMock.create.mockResolvedValue(createdUser);

    // act
    const result = await service.create(createUserDto);

    // assert
    expect(result).toEqual(createdUser);
    expect(userModelMock.create).toHaveBeenCalledWith(createUserDto);
  });

});
