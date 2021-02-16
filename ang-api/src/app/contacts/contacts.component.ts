import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from '../Services/contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})

export class ContactsComponent implements OnInit{
  firstName = '';
  lastName = '';
  email = '';
  company = '';
  phone = '';

  state: any;

  input = {
    width: '360px',
    background: '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    border: '0',
    outline: '0',
    padding: '22px 18px'
  };

  public contacts: any;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts = () => {
    this.contactService.getContacts()
    .subscribe(
      data => {
        console.log(data);
        this.contacts = data;
      },
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
        console.log(error);
      }
    );
  }
}
