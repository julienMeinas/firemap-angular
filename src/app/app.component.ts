import { Component, OnInit } from '@angular/core';
import { FireworkService} from './service/Firework.service';
import { Firework } from './classes/Firework';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firemap-angular';
  fireworks: Firework[];
  fireworkSubscription: Subscription;

  constructor(private fireworkService: FireworkService ) {
    
  }

  ngOnInit() {
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
