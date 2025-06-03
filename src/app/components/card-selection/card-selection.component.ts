import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-selection',
  imports: [],
  templateUrl: './card-selection.component.html',
  styleUrl: './card-selection.component.css'
})
export class CardSelectionComponent {
selectedCard: string = '';

  constructor(private router: Router) {}

  selectCard(color: string) {
    this.selectedCard = color;
  }

  revealGift() {
    if (this.selectedCard) {
      // Navegar al componente del video
      this.router.navigate(['/video-gift']);
    }
  }
}
