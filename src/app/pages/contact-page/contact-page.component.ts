import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactDTO } from 'src/app/viewModels/contact-dto';

const API_URL = 'https://jsonplaceholder.typicode.com/';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts: ContactDTO[] = [];
  selectedContact!: ContactDTO;

  isLoading = false;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.getContactsFromAPI();
    //Default selected contact is the first one
    this.selectedContact = this.contacts[0];
  }

  private async getContactsFromAPI() {
    await this.http
      .get<ContactDTO[]>(API_URL + 'users')
      .toPromise()
      .then((result) => {
        this.contacts = result;
      });
  }

  private async getContactFromAPI(id: number) {
    await this.http
      .get<ContactDTO>(API_URL + `users/${id}`)
      .toPromise()
      .then((result) => {
        this.selectedContact = { ...result };
      });
  }

  async updateContent(contactID: number) {
    console.log(contactID);
    try {
      this.isLoading = true;
      await this.getContactFromAPI(contactID);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }

    while (this.isLoading) {
      return;
    }
  }
}
