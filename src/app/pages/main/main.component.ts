import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CountryService } from '../../services/api/country.service';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, CommonModule, FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  countries: any[] = [];
  faMagnifiyingGlass = faMagnifyingGlass;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getAllCountries()
      .pipe(
        catchError((error: any) => {
          console.error('An error occurred:', error);
          return of([]);
        })
      )
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}
