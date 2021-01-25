import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FireworkComponent } from './firework/firework.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { FiremapApiService } from './service/FiremapApi.service';
import { FireworkItemComponent } from './firework-item/firework-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FireworkComponent,
    ContactComponent,
    FireworkItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [FiremapApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
