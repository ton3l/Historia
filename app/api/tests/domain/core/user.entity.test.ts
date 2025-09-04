import Encryptor from '@api/infrastructure/encryption/argon2.encryptor';
import User from '@api/domain/core/user.entity';
import { test, expect } from 'bun:test';

test('should create a user successfully', async () => {
    const user = await User.create({
        name: 'John Doe',
        email: 'OqO0K@example.com',
        rawPassword: 'password123',
        encryptor: new Encryptor(),
    });

    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('OqO0K@example.com');
});
