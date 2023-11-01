import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from 'src/types';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  constructor(private apiService: ApiService) {
    this.getMissingPersons();
    this.resetFilter(true);
  }

  /* Load data from service and subscribe content into personsData */
  getMissingPersons(): void {
    this.apiService.get().subscribe((API) => {
      this.personsData = API.content;
      this.filteredPersonsData = this.personsData;
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
