import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {
  }

  getContacts = () => this.http.get(this.url);

  addContact = (value: any) => {
    const body = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      company: value.company,
      phone: parseInt(value.phone, 10),
    };
    console.log(body);

    return this.http.post(this.url, body);
  }
}
