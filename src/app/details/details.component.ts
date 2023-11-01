import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Person } from 'src/types';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id?: number;
  personData?: Person;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loading = true;

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });

    console.log(this.id);

    this.apiService.getById(this.id ?? 0).subscribe((p) => {
      console.log(p);
      this.personData = p;
      this.loading = false;
    });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
