import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/types';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent {
  @Input() person: Partial<Person> = {};

  constructor(private router: Router) {}

  /* Navigate to details page with query params Person.id */
  gotoDetails() {
    this.router.navigate([
      '/detalhes/',
      {
        id: this.person.id,
      },
    ]);
  }
}
