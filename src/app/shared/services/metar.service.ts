import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class MetarService {
  private _url: string = environments.METAR_API + '/metar';
  constructor(private _http: HttpClient) {}

  getStation(station: string) {
    return this._http
      .get(this._url + '/' + station + '/decoded', {
        headers: {
          'X-API-Key': environments.METAR_KEY,
        },
      })
      .pipe(map((res: any) => res.data));
  }

  getRadius(station: string, radius: number) {
    return this._http
      .get(this._url + `/${station}/radius/${radius}/decoded`, {
        headers: {
          'X-API-Key': environments.METAR_KEY,
        },
      })
      .pipe(map((res: any) => res.data));
  }

  getData(station: string) {
    return combineLatest([
      this.getStation(station),
      this.getRadius(station, 200),
    ]).pipe(map(el => el.flat()));
  }
}
