import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.scss',
})
export class HeaderbarComponent {
  isBrightTheme: boolean = true;
  faMoon = faMoon;

  toggleTheme() {
    this.isBrightTheme = !this.isBrightTheme;
    document.body.setAttribute(
      'data-theme',
      this.isBrightTheme ? 'light' : 'dark'
    );
  }
}
