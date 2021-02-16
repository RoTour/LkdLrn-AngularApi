import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'http://localhost:3000/contact';
  registerUrl = 'http://localhost:3000/auth/register';
  loginUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${this.auth.getToken()}`,
    })
  };

  getContacts = () => {
    console.log(this.httpOptions);
    return this.http.get(this.url, this.httpOptions);
  }

  addContact = (value: any) => {
    const body = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      company: value.company,
      phone: parseInt(value.phone, 10),
    };
    console.log(body);

    return this.http.post(this.url, body, this.httpOptions);
  }

  login = (payload: any) => {
    return this.http.post(this.loginUrl, payload);
  }
}
