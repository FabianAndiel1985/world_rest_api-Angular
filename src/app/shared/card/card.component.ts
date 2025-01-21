import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() imgSrc: string = '';
  @Input() name: string = '';
  @Input() population: number = 0;
  @Input() region: string = '';
  @Input() capital: string[] = [];
}
