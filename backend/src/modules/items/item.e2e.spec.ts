import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ItemsModule } from '@/modules/items/items.module';
import { PrismaClient } from '@prisma/client';
import itemsMock from './mocks/items.mock';

describe('ItemsController (e2e)', () => {
  let app: INestApplication = null;
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ItemsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await prisma.item.deleteMany({});
    await app.close();
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.item.deleteMany({});
    await prisma.item.createMany({
      data: itemsMock,
    });
  });

  it('should filter items by name, category and priceUpper', async () => {
    const res = await request(app.getHttpServer()).get('/items').query({
      name: 'P250 | Infer',
      category: 'Pistols',
      priceUpper: '0',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toContain('P250 | Infer');
  });

  it('should filter items by priceLower and order by price descending', async () => {
    const res = await request(app.getHttpServer()).get('/items').query({
      priceLower: '10',
      orderColumn: 'price',
      orderDirection: 'desc',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].price).toBe(2);
  });

  it('should filter items by priceLower and order by price ascending with default order direction', async () => {
    const res = await request(app.getHttpServer()).get('/items').query({
      priceLower: '10',
      orderColumn: 'price',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].price).toBe(2);
  });

  it('should filter items by exact float value', async () => {
    const res = await request(app.getHttpServer()).get('/items').query({
      float: '1',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].float).toBe('1');
  });

  it('should apply pagination and return the correct page', async () => {
    const res = await request(app.getHttpServer()).get('/items').query({
      pageNumber: '1',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  it('should filter items by category only', async () => {
    const res = await request(app.getHttpServer()).get('/items').query({
      category: 'Pistols',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].category).toBe('Pistols');
  });

  it('should return all items when no filters are applied', async () => {
    const res = await request(app.getHttpServer()).get('/items');

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });
});
