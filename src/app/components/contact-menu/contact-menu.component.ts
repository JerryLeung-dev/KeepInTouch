import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ContactDTO } from 'src/app/viewModels/contact-dto';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.scss'],
})
export class ContactMenuComponent {
  @Input() items!: ContactDTO[];
  @Input() dayMode = true;

  @Output() itemSelected = new EventEmitter<number>();

  selectedID = 1;
  constructor() {}

  selectItem(contactID: number) {
    this.selectedID = contactID;
    this.itemSelected.emit(contactID);
  }

  isSelected(contactID: number) {
    return this.selectedID === contactID;
  }
}
