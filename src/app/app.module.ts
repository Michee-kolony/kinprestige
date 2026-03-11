import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InViewDirective } from './directives/in-view.directive';
import { KinprestigeComponent } from './client/kinprestige/kinprestige.component';
import { HomeComponent } from './client/home/home.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { ServicesComponent } from './client/services/services.component';
import { FooterComponent } from './client/footer/footer.component';
import { ContactComponent } from './client/contact/contact.component';
import { RaisonComponent } from './client/raison/raison.component';
import { AboutComponent } from './client/about/about.component';
import { EngagementComponent } from './client/engagement/engagement.component';

@NgModule({
  declarations: [
    AppComponent,
    InViewDirective,
    KinprestigeComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    RaisonComponent,
    AboutComponent,
    EngagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
