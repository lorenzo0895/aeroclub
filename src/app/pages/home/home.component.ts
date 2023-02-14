import { Component, OnInit } from '@angular/core';
import { ICardData } from 'src/app/shared/components/card/card.component';
import { StoreService } from 'src/app/shared/services/store.service';

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
  metarArray: any[] = [];

  constructor(private _storeService: StoreService) {}

  ngOnInit(): void {
    this._storeService.data$.subscribe(res => {
      this.metarArray = res?.metar?.slice?.(0,3) ?? [];
    });
  }

}
