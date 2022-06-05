import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token!: string | null;

  constructor() {
    this.updateToken();
  }

  private updateToken(): void {
    const token = localStorage.getItem('data');
    if (token) {
      this.token = token;
    }
  }

  create(token: string): void {
    this.token = token;
    localStorage.setItem('data', token);
  }

  destroy(): void {
    localStorage.removeItem('data');
    this.token = null;
  }
}
