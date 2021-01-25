import { Component, OnInit } from '@angular/core';
import { Firework } from '../classes/Firework';

@Component({
  selector: 'app-firework',
  templateUrl: './firework.component.html',
  styleUrls: ['./firework.component.css']
})
export class FireworkComponent implements OnInit {
  fireworks = [
    {
      id: 1,
      city: "Tourcoing",
      address: "Tourcoing centre",
      price: 0,
      handicapAccess: true,
      duration: "Low",
      crowed: "Middle"
    }
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

}
