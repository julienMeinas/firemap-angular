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
  validCity: boolean = true;
  validAddress: boolean = true;
  validDate: boolean = true;
  validPrice: boolean = true;
  validHandicapAccess: boolean = true;
  validDuration: boolean = true;
  validCrowed: boolean = true;

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
    if(this.validFirework(city, address, date, price, handicapAccess, duration, crowed)) {
      this.fireworkService.addFirework(city, address, date, price, handicapAccess, duration, crowed);
      this.router.navigate(['/firework']);
    }
  }


  validFirework(city: string, address: string, date: string, price: string, 
                handicapAccess: string, duration: string, crowed: string ): boolean {
    
    var res = true;
    if(city == "") {
      res = false;
      this.validCity = false;
    }else {
      this.validCity = true;;
    }

    if(address == ""){
      res = false;
      this.validAddress = false;
    }else {
      this.validAddress = true;;
    }

    if(!this.isValidDate(date)){
      res = false;
      this.validDate = false;
    }else {
      this.validDate = true;;
    }

    if(price == ""){
      res = false;
      this.validPrice = false;
    }else {
      this.validPrice = true;;
    }

    if(handicapAccess == ""){
      res = false;
      this.validHandicapAccess = false;
    }else {
      this.validHandicapAccess = true;;
    }

    if(duration == ""){
      res = false;
      this.validDuration = false;
    }else {
      this.validDuration = true;;
    }

    if(crowed == ""){
      res = false;
      this.validCrowed = false;
    }else {
      this.validCrowed = true;;
    }

    return res;
  }


  isValidDate(date: string): boolean {
    if(date.length != 10)
      return false;
    const day = date.substring(0,3);
    const month = date.substring(3,5);
    if(+day < 0 || +day > 31)
      return false;
    if(+month < 0 || +month > 12)
      return false;
    if(date.substring(2,3) != "/")
      return false;
    if(date.substring(5,6) != "/")
      return false;
    return true;
  }



}
