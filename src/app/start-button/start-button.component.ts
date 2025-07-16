import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-start-button',
  imports: [],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.scss'
})
export class StartButtonComponent {

  @Input() newGame: (() => void) | undefined;

  handleClick() {
    if (this.newGame)
      this.newGame();
  }
}
