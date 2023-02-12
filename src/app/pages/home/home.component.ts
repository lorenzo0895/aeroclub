import { Component } from '@angular/core';
import { ICardData } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Array = Array;
  cardsData: ICardData[] = [
    { title: 'Piloto Privado de Avión' },
    { title: 'Piloto Comercial de Avión' },
    { title: 'Habilitación de Vuelo por Instrumentos' },
  ]
}
