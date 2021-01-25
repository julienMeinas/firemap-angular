import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import {Firework} from '../classes/Firework'

const optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

@Injectable()
export class FiremapApiService {
  private _fireworksListUrl = 'https://localhost:8080/fireworks/';


    constructor(private httpclient: HttpClient) {

    }

    getFireworks(): Observable<any> {
        return this.httpclient.get(this._fireworksListUrl, optionRequete);
    }
}






