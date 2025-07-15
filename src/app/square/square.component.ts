import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  template: `
    <div>
      <p [className]="value === 'X' ? 'player-x' : 'player-o'">
        {{ value }}
      </p>
    </div>
  `,
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
