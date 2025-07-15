import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  squares: ('X' | 'O' | null)[] = [];
  xIsNext: boolean = false;
  winner: string | null = null;

  constructor() {}

  ngOnInit(): void {
      this.newGame();
  }

  newGame(): void {
    this.squares = [];
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true
  }

  get currentPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (this.winner) {
      return;
    }
    
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.currentPlayer);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const possibleLineCombinations = [
      [0, 1, 2],
      [3, 4, 5], 
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const line of possibleLineCombinations) {
      const [a, b, c] = line;

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }      
    }

    return null;
  }

  isDraw(): boolean {
    return !this.winner && this.squares.every(square => square !== null);
  }
}
