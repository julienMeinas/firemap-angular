import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import {  Subject } from 'rxjs'
import { Firework } from '../classes/Firework';


@Injectable()
export class FireworkService {

  fireworkSubject = new Subject<any[]>();

  private fireworks = [
    {
      id: 1,
      city: "Tourcoing",
      address: "Tourcoing centre",
      date: "14/07/2022",
      price: 0,
      handicapAccess: true,
      duration: "Low",
      crowed: "Middle"
    },
    {
      id: 2,
      city: "Lille",
      address: "Foire de Lille",
      date: "15/07/2022",
      price: 0,
      handicapAccess: true,
      duration: "Medium",
      crowed: "High"
    }
  ]


    constructor(private httpclient: HttpClient) {

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

    addFirework(city: string, address: string, date: string, price: number, handicapAccess: boolean, duration: string, crowed: string) {
      const fireworkObject = {
        id: 0,
        city: "",
        address: "",
        date: "",
        price: 0,
        handicapAccess: true,
        duration: "",
        crowed: ""
      };
      fireworkObject.id = this.fireworks[(this.fireworks.length - 1)].id + 1;
      fireworkObject.city = city;
      fireworkObject.address = address;
      fireworkObject.date = date;
      fireworkObject.price = price;
      fireworkObject.handicapAccess = handicapAccess;
      fireworkObject.duration = duration;
      fireworkObject.crowed = crowed;
      this.fireworks.push(fireworkObject);
      this.emitFireworkSubject();
    }

  
}






