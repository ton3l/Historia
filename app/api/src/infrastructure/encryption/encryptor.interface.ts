import type IEncryptor from "../../domain/interfaces/encryption.interface";
import * as argon from 'argon2'

export default class Encryptor implements IEncryptor {
    async hash(plainText: string): Promise<string> {
        return await argon.hash(plainText);
    }

    async verify(plainText: string, hash: string): Promise<boolean> {
        // Implement verification logic
        return plainText === hash;
    }
}
