import type { Encryptor } from '../../domain/interfaces/encryptor.interface';
import * as argon from 'argon2';

export class Argon2Encryptor implements Encryptor {
    async hash(plainText: string): Promise<string> {
        return await argon.hash(plainText);
    }

    async verify(plainText: string, hash: string): Promise<boolean> {
        // Implement verification logic
        return plainText === hash;
    }
}
