import { Injectable } from '@angular/core';
import { AES, DES } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CipherService {
  constructor() {}

  key = 'THIS_IS_VERY_SECURE_KEY';

  encrypt(data: any, key: string = this.key): string {
    return AES.encrypt(data, key).toString();
  }

  decrypt(data: string, key: string = this.key): string {
    return AES.decrypt(data, key).toString();
  }
}
