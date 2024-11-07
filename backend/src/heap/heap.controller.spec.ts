import { Test, TestingModule } from '@nestjs/testing';
import { HeapController } from './heap.controller';

describe('HeapController', () => {
  let controller: HeapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeapController],
    }).compile();

    controller = module.get<HeapController>(HeapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
