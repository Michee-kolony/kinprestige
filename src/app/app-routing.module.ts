import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KinprestigeComponent } from './client/kinprestige/kinprestige.component';
import { HomeComponent } from './client/home/home.component';
import { ServicesComponent } from './client/services/services.component';
import { ContactComponent } from './client/contact/contact.component';
import {RaisonComponent} from './client/raison/raison.component';
import { AboutComponent } from './client/about/about.component';
import { EngagementComponent } from './client/engagement/engagement.component';

const routes: Routes = [
  {path: "", redirectTo:"/kinprestige", pathMatch:"full"},
  {path:'kinprestige', component: KinprestigeComponent, 
    children: [
      {path: '', redirectTo:"home", pathMatch:"full"},
      {path:'home', component: HomeComponent},
      {path:'services', component : ServicesComponent},
      {path:'contact', component: ContactComponent},
      {path:'pourquoi-choisir-kinprestige', component: RaisonComponent},
      {path:'qui-sommes-nous', component: AboutComponent},
      {path:'engagement', component: EngagementComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
