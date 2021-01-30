import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FireworkService } from '../service/Firework.service';

@Component({
  selector: 'app-edit-firework',
  templateUrl: './edit-firework.component.html',
  styleUrls: ['./edit-firework.component.css']
})
export class EditFireworkComponent implements OnInit {

  constructor(private fireworkService: FireworkService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const city = form.value['city'];
    const address = form.value['address'];
    const date = form.value['date'];
    const price = form.value['price'];
    const handicapAccess = form.value['accessHandicap'];
    const duration = form.value['duration'];
    const crowed = form.value['crowded'];
    this.fireworkService.addFirework(city, address, date, price, handicapAccess, duration, crowed);
    this.router.navigate(['/firework']);
  }

}
