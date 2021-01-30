import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditFireworkComponent } from './edit-firework/edit-firework.component';
import { FireworkComponent } from './firework/firework.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'firework', component: FireworkComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'edit', component: EditFireworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
