import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-api';
  // Maybe create Contact Class ?
  public contacts: any;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts = () => {
    this.contactService.getContacts()
    .subscribe(
      data => this.contacts = data,
      error => console.log(error)
    );
  }

  addContact = (value: any) => {
    this.contactService.addContact(value)
    .subscribe(
      () => {
        this.getContacts();
        return true;
      },
      error => {
        console.log('Error saving contact');
        return Observable.throw(error);
      }
    );
  }

}
