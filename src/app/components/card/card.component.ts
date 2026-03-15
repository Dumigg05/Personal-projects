import { Component,input,output } from '@angular/core';
import { ButtonType, CardVariant } from '../../data-type/data-type';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = input<string>();
  content = input<string>();
  imageUrl = input<string>(); // <-- NOU: pentru imaginea din card
  showButton = input<boolean>(true);
  buttonLabel = input<string>();
  buttonIcon = input<string>();
  cardButtonClicked = output<void>();
  cardVariant= input<CardVariant>(CardVariant.Default);
  cardVariantEnum = CardVariant;

  onButtonClick(): void {
    this.cardButtonClicked.emit();
  
  }
  setButtonType(): ButtonType {
    return this.cardVariant() == CardVariant.Featured ? ButtonType.Secondary : ButtonType.Primary;
  }
}

