import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  template: `
    <p>
      {{ value }}
    </p>
  `,
  styles: ``
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
