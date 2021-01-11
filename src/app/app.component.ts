import { Component, OnInit } from '@angular/core';
import { FiremapApiService} from './service/FiremapApi.service';
import { Firework } from './classes/Firework';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firemap-angular';
  fireworks: Firework[];

  constructor(private firemapApiService: FiremapApiService ) {
    
  }

  ngOnInit() {
    this.firemapApiService.getFireworks()
      .subscribe
      (
        data =>
        {
          this.fireworks = data;
        }
      )
  }

}
