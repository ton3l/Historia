import { PrismaListPersistence } from '@infrastructure/persistence/prisma/list.persistence';
import { PrismaUserPersistence } from '@infrastructure/persistence/prisma/user.persistence';
import { PrismaBoardPersistence } from '@infrastructure/persistence/prisma/board.persistence';
import { BoardRoute } from '@infrastructure/server/routes/board.route';
import { Authentication } from '@infrastructure/server/middlewares/auth.middleware';
import { Argon2Encryptor } from '@infrastructure/encryption/argon2.encryptor';
import { Logger } from '@infrastructure/server/middlewares/logger.middleware';
import { JwtTokenProvider } from '@infrastructure/providers/jwt.provider';
import { AccountRoute } from '@server/routes/account.route';
import { ListRoute } from '@server/routes/list.route';
import { container } from 'tsyringe';

container.register('Routes', { useClass: AccountRoute });
container.register('Routes', { useClass: BoardRoute });
container.register('Routes', { useClass: ListRoute });

container.register('Encryptor', { useClass: Argon2Encryptor });
container.register('TokenProvider', { useClass: JwtTokenProvider });

container.register('UserRepository', { useClass: PrismaUserPersistence });
container.register('BoardRepository', { useClass: PrismaBoardPersistence });
container.register('ListRepository', { useClass: PrismaListPersistence });

container.register('Middlewares', { useClass: Logger });
container.register('Middlewares', { useClass: Authentication });