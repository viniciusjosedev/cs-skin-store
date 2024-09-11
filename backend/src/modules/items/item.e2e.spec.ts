import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ItemsModule } from '@/modules/items/items.module';

describe('AppController (e2e)', () => {
  let app: INestApplication = null;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ItemsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ITEMS (GET)', () => {
    return request(app.getHttpServer()).get('/items').expect(200);
  });
});
