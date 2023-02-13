import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MetarService {

  private _url: string = environments.METAR_API + '/metar';
  constructor(private _http: HttpClient) { }

  getData(station: string) {
    return this._http.get(this._url + '/' + station + '/decoded', {
      headers: {
        'X-API-Key': environments.METAR_KEY
      }
    });
  }
}
