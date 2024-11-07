import { Test, TestingModule } from '@nestjs/testing';
import { HeapService } from './heap.service';

describe('HeapService', () => {
  let service: HeapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeapService],
    }).compile();

    service = module.get<HeapService>(HeapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
