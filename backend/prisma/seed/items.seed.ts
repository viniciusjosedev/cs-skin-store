import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import * as path from 'path';

interface Item {
  id: string;
  skin_id: string;
  name: string;
  description: string;
  weapon: {
    id: string;
    name: string;
  };
  category?: {
    id: string;
    name: string;
  };
  pattern: {
    id: string;
    name: string;
  };
  min_float: number;
  max_float: number;
  wear: {
    id: string;
    name: string;
  };
  stattrak: boolean;
  souvenir: boolean;
  paint_index: string;
  rarity: {
    id: string;
    name: string;
    color: string;
  };
  market_hash_name: string;
  team: {
    id: string;
    name: string;
  };
  image: string;
}

const prisma = new PrismaClient();

async function main() {
  await prisma.item.deleteMany();

  const filePath = path.resolve(__dirname, '../../mock-items.json');

  const items = JSON.parse(await fs.readFile(filePath, 'utf-8')) as Item[];

  await prisma.item.createMany({
    data: items.map((item) => ({
      name: item.name,
      category: item.category?.name || 'none',
      price: Math.floor(Math.random() * 1000),
      image: item.image,
      float: String(item.min_float || item.max_float) || '1',
    })),
  });

  console.log('Itens populados com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
