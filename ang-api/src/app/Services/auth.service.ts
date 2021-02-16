import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey = 'contacts-jwt';

  constructor() {
  }

  setToken = (token: string) => {
    localStorage.setItem(this.storageKey, token);
  }

  getToken = () => {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn = () => {
    return (this.getToken() !== undefined && this.getToken() !== null);
  }

  logout = () => {
    localStorage.removeItem(this.storageKey);
  }
}
