import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'

const optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

@Injectable()
export class FiremapApiService {

    constructor(private httpclient: HttpClient) {

    }

    getFireworks(): Observable<any> {
        return this.httpclient.get("https://firemap-api-rest.herokuapp.com/fireworks/");
    }
}






