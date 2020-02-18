import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setActiveToken(token: string): boolean {
    localStorage.setItem('token', token);
    return true;
  }

  getActiveToken(): string {
    return localStorage.getItem('token');
  }
}
