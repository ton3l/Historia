import { Argon2Encryptor } from '@api/infrastructure/encryption/argon2.encryptor';
import { User } from '@api/domain/core/user.entity';
import { test, expect } from 'bun:test';

test('should create a user successfully', async () => {
    const user = await User.create({
        name: 'John Doe',
        email: 'test@test.com',
        rawPassword: 'password123',
        encryptor: new Argon2Encryptor(),
    });

    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('test@test.com');
});
