import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MetarService } from './metar.service';

export interface IData {
  metar: any;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _behSub$: BehaviorSubject<IData> = new BehaviorSubject({
    metar: undefined
  });
  data$ = this._behSub$.asObservable();

  constructor(private _metarService: MetarService) {
    this._metarService.getData('SAAR').subscribe(res => {
      this._behSub$.next({ ...this._behSub$.value, metar: res })
    })
  }

}
