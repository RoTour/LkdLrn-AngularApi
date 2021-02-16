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
    const body = JSON.stringify(value);
    return this.http.post(this.url, body);
  }
}
