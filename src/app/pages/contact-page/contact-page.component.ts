import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactDTO } from 'src/app/viewModels/ContactViewModel';

const API_URL = 'https://jsonplaceholder.typicode.com/';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts: ContactDTO[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.getContactsFromAPI();
  }

  private async getContactsFromAPI() {
    await this.http
      .get<ContactDTO[]>(API_URL + 'users')
      .toPromise()
      .then((result) => {
        this.contacts = result;
      });
  }
}
