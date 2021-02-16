import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang-api';
  url = 'http://localhost:3000/contact';
  // Maybe create Contact Class ?
  public contacts: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe(
        data => { this.contacts = data; },
        error => console.log(error)
      );
  }
}
