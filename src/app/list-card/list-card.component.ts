import { Component, Input } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent {
  @Input() item: Partial<Person> = {};
}
