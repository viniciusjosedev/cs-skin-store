import log from '../../src/log/index';
import { GenerateSeed } from '../../src/database/generate.seed';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

new GenerateSeed(prisma)
  .run()
  .catch((e) => {
    log.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
