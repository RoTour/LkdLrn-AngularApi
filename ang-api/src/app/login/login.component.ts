import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Services/contacts.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token = '';
  username = '';
  email = '';
  password = '';

  constructor(private api: ContactsService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login($event: any): void {
    $event.preventDefault();
    const payload = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.api.login(payload)
      .subscribe(
        data => {
          // @ts-ignore
          this.token = data['token'];
          this.auth.setToken(this.token);
          location.reload();
        },
        error => console.log(error)
      );
  }
}
