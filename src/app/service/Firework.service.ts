import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import {  Subject } from 'rxjs'
import { Firework } from '../classes/Firework';


@Injectable()
export class FireworkService {

  fireworkSubject = new Subject<any[]>();

  private fireworks = []


    constructor(private httpclient: HttpClient) {
      const url = "https://firemap-api-rest.herokuapp.com/fireworks/";
      this.httpclient
        .get<any[]>(url)
        .subscribe(
          (data) => {
            console.log("récupération des feux d'artifice");
            console.log(data);
            this.fireworks = data;
            this.emitFireworkSubject();
          },
          (error) => {
            console.log("erreur lors de la récupération des feux d'artifice");
          }
        )
    }


    getFireworkById(id: number) {
      const firework = this.fireworks.find(
        (fireworkObject) => {
          return fireworkObject.id === id;
        }
      )
      return firework;
    }
    

    emitFireworkSubject() {
      this.fireworkSubject.next(this.fireworks.slice());
    }


    getFireworks() {
      return this.fireworks;
    }


  
}






