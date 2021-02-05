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
            this.fireworks.forEach(element => {
              this.displayData(element);
              
            });
            this.emitFireworkSubject();
          },
          (error) => {
            console.log("erreur lors de la récupération des feux d'artifice");
          }
        )
    }

    displayData(element) {
      if(element.handicapAccess == "true"){
        element.handicapAccess = "Oui";
      }else{
        element.handicapAccess = "Non";
      }
      if(element.duration == "Short") {
        element.duration = "Court"
      }else if(element.duration == "Middle") {
        element.duration = "Moyen";
      }else if (element.duration == "Long"){
        element.duration = "Long"
      } else {
        element.duration = "Non indiqué"
      }

      if(element.crowded == "Low") {
        element.crowded = "Peu de monde"
      }else if(element.crowded == "Medium") {
        element.crowded = "Moyennement de monde";
      }else if (element.crowded == "High"){
        element.crowded = "Beaucoup de monde"
      } else {
        element.crowded = "Non indiqué"
      }

      // date
      element.date = element.date.substring(8,10) + "/" + element.date.substring(5,7) + "/" + element.date.substring(0,4) + " - " + element.date.substring(11,16);

    }
    

    emitFireworkSubject() {
      this.fireworkSubject.next(this.fireworks.slice());
    }


    getFireworks() {
      return this.fireworks;
    }


  
}






