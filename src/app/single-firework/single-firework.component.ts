import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireworkService } from '../service/Firework.service';

@Component({
  selector: 'app-single-firework',
  templateUrl: './single-firework.component.html',
  styleUrls: ['./single-firework.component.css']
})
export class SingleFireworkComponent implements OnInit {
  city: string = "city";
  address: string = "address";
  date: string = "date";
  price: string = "Gratuit";
  handicapAccess: string;
  duration: string;
  crowed: string;

  constructor(private fireworkService: FireworkService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const fireworkObject = this.fireworkService.getFireworkById(+id);
    this.city = fireworkObject.city;
    this.address = fireworkObject.address;
    this.date = fireworkObject.date;
    this.price = fireworkObject.price;
    this.handicapAccess = fireworkObject.handicapAccess;
    this.duration = fireworkObject.duration;
    this.crowed = fireworkObject.crowed;
  }

}
