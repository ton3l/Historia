import { Argon2Encryptor } from '@infrastructure/encryption/argon2.encryptor';
import { AccountRoute } from '@server/routes/account.route';
import { AccountController } from '../server/controllers/account.controller';
import { RegisterUseCase } from '@api/application/register.usecase';
import { container } from 'tsyringe';

container.register('Routes', { useClass: AccountRoute });
container.register('Encryptor', { useClass: Argon2Encryptor });
// container.register('AccountController', { useClass: AccountController });
// container.register('RegisterUseCase', { useClass: RegisterUseCase });