import { Component, Input, OnInit } from '@angular/core';
import { Firework } from '../classes/Firework';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firework-item',
  templateUrl: './firework-item.component.html',
  styleUrls: ['./firework-item.component.css']
})
export class FireworkItemComponent implements OnInit {
  msg: String = "item feu d'artifice";
  @Input() id: number
  @Input() city: String
  @Input() address: String
  @Input() price: Int16Array
  @Input() handicapAccess: boolean
  @Input() duration: String
  @Input() crowded: String

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
