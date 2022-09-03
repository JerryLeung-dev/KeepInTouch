import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { CompanyInfo } from 'src/app/viewModels/contact-dto';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
})
export class CompanyCardComponent implements OnInit, OnChanges {
  @Input() item!: CompanyInfo;
  @Input() dayMode = true;
  @Input() displayCard = true;
  catchPhrases: string[] = [];
  colors = ['orange', 'green', 'purple', 'gold', 'geekblue'];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      const phrases = this.item.catchPhrase.split(' ');
      this.catchPhrases = phrases.map((phase) => phase.replace('-', ' '));
    }
  }

  getColor(index: number) {
    return this.colors[index];
  }
}
