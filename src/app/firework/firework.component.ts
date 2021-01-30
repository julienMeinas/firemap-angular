import { Component, OnInit } from '@angular/core';
import { Firework } from '../classes/Firework';
import {  Subject } from 'rxjs'
import { FireworkService } from '../service/Firework.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-firework',
  templateUrl: './firework.component.html',
  styleUrls: ['./firework.component.css']
})
export class FireworkComponent implements OnInit {
  fireworks: Firework[];
  fireworkSubscription: Subscription;

  constructor(private fireworkService: FireworkService) {
  }

  ngOnInit(): void {
    this.fireworkSubscription = this.fireworkService.fireworkSubject.subscribe(
      (fireworks: any[]) => {
        this.fireworks = fireworks;
      }
    )
    this.fireworkService.emitFireworkSubject();
  }


  getFireworks() {
    return this.fireworks;
  }
  

  

}
