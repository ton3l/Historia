import { PrismaUserPersistence } from '@infrastructure/persistence/prisma/user.persistence';
import { Argon2Encryptor } from '@infrastructure/encryption/argon2.encryptor';
import { AccountRoute } from '@server/routes/account.route';
import { container } from 'tsyringe';

container.register('Routes', { useClass: AccountRoute });
container.register('Encryptor', { useClass: Argon2Encryptor });
container.register('UserRepository', { useClass: PrismaUserPersistence });