import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ContactDTO } from 'src/app/viewModels/contact-dto';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit, OnChanges {
  @Input() item!: ContactDTO;
  @Input() dayMode = true;

  isLoading = true;
  googleMapURL = 'http://maps.google.com/?q=';

  contactAddress!: string;
  isDesktopMode = true;

  get addressOnMap() {
    if (this.item) {
      return this.googleMapURL + this.contactAddress;
    }
    return '';
  }

  constructor(private readonly observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.observer.observe(['(max-width: 380px)']).subscribe((res) => {
      if (res.matches) this.isDesktopMode = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { item } = changes;
    if (item) {
      const suite = this.item?.address.suite;
      const street = this.item?.address.street;
      const city = this.item?.address.city;
      const zipcode = this.item?.address.zipcode;
      this.contactAddress = `${suite} ${street} ${city} ${zipcode}`;
    }
  }
}
