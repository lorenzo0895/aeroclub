import { Component, OnInit } from '@angular/core';
import { ICardData } from 'src/app/shared/components/card/card.component';
import { MetarService } from 'src/app/shared/services/metar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Array = Array;
  cardsData: ICardData[] = [
    { title: 'Piloto Privado de Avión' },
    { title: 'Piloto Comercial de Avión' },
    { title: 'Habilitación de Vuelo por Instrumentos' },
  ];

  constructor(private _metarService: MetarService){}

  ngOnInit() {
    this._metarService.getData('SAAR').subscribe(console.log)
  }
}
