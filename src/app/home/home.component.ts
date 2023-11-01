import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from 'src/types';
import { ApiService } from '../api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /* Inital array of missing persons  */
  personsData: Person[] = [];
  /* Array for applying filters under personsData */
  filteredPersonsData: Person[] = [];
  /* Form control */
  filterForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
  });
  /* Pagination attributes */
  totalPages: number = 0;
  currentPage: number = 0;
  /* Loading indicator variable */
  loading: boolean = false;

  constructor(private apiService: ApiService) {
    this.getMissingPersons(null);
    this.resetFilter(true);
  }

  /* Load data from service and subscribe content into personsData */
  getMissingPersons(event: PageEvent | null): void {
    this.loading = true;

    /* Load page 0 if event is null otherwise load event.currentPage (index) */
    this.apiService.get(event?.pageIndex ?? 0).subscribe((API) => {
      this.personsData = API.content;
      this.filteredPersonsData = this.personsData;
      this.totalPages = API.totalElements;
      this.currentPage = API.pageable.pageNumber;
      this.loading = false;
      this.resetFilter(true);
    });
  }

  /* Apply filters on form submit */
  onSubmit() {
    this.resetFilter(false);

    if (this.filterForm.value.name) {
      /* Declaring variable temporarily to convert type or avoid null values */
      const name = this.filterForm.value.name;
      this.filteredPersonsData = this.filteredPersonsData.filter((p) =>
        p.nome.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (this.filterForm.value.age) {
      const age = parseInt(this.filterForm.value.age);
      this.filteredPersonsData = this.filteredPersonsData.filter(
        (p) => p.idade === age
      );
    }

    if (this.filterForm.value.gender) {
      const gender = this.filterForm.value.gender.toLocaleUpperCase();
      console.log(this.filterForm.value.gender);
      this.filteredPersonsData = this.filteredPersonsData.filter(
        (p) => p.sexo === gender
      );
    }
  }

  /* Resets the filters to the original state of personsData as well as the form to empty values */
  resetFilter(applyToGender: boolean) {
    this.filteredPersonsData = this.personsData;

    if (applyToGender) {
      this.filterForm.reset({
        gender: '',
      });
    }
  }
}
