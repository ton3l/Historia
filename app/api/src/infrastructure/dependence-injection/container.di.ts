import { PrismaUserPersistence } from '@infrastructure/persistence/prisma/user.persistence';
import { Authentication } from '@infrastructure/server/middlewares/auth.middleware';
import { Argon2Encryptor } from '@infrastructure/encryption/argon2.encryptor';
import { Logger } from '@infrastructure/server/middlewares/logger.middleware';
import { JwtTokenProvider } from '@infrastructure/providers/jwt.provider';
import { AccountRoute } from '@server/routes/account.route';
import { container } from 'tsyringe';

container.register('Routes', { useClass: AccountRoute });
container.register('Encryptor', { useClass: Argon2Encryptor });
container.register('UserRepository', { useClass: PrismaUserPersistence });
container.register('Middlewares', { useClass: Logger });
container.register('Middlewares', { useClass: Authentication });
container.register('TokenProvider', { useClass: JwtTokenProvider });
