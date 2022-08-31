import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { LiteContactDTO } from 'src/app/viewModels/ContactViewModel';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.scss'],
})
export class ContactMenuComponent implements OnChanges {
  @Input() contacts!: LiteContactDTO[];
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.contacts);
  }
}
