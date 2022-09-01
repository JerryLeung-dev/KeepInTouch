import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ContactDTO } from 'src/app/viewModels/contact-dto';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit, OnChanges {
  @Input() item!: ContactDTO;

  isLoading = true;

  get contactAddress() {
    if (this.item) {
      const suite = this.item.address.suite;
      const street = this.item.address.street;
      const city = this.item.address.city;
      const zipcode = this.item.address.zipcode;
      return `${suite} ${street} ${city} ${zipcode}`;
    } else {
      return;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { item } = changes;
    if (item) {
      this.isLoading = true;
    }
  }
}
