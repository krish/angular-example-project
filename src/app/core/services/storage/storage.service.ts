import { Injectable } from '@angular/core';
import { CipherService } from '../util/cipher.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cipher: CipherService) {}
  KEY = '$auth-token';
  addToken(token: string): void {
    localStorage.setItem(this.KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.KEY);
  }

  deleteToken(): void {
    localStorage.removeItem(this.KEY);
  }

  addObject(key: string, data: any): void {
    localStorage.setItem(key, this.cipher.encrypt(data));
  }
  getItem(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
      return this.cipher.decrypt(data);
    } else {
      return null;
    }
  }
}
