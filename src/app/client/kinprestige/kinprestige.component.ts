import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinprestige',
  templateUrl: './kinprestige.component.html',
  styleUrl: './kinprestige.component.css'
})
export class KinprestigeComponent implements OnInit {


  showCookieModal = false;

  ngOnInit() {
  
    const consent = localStorage.getItem('cookieConsent');
  
    if (!consent) {
      this.showCookieModal = true;
    }
  
  }
  
  acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.showCookieModal = false;
  }
  
  refuseCookies() {
    localStorage.setItem('cookieConsent', 'refused');
    this.showCookieModal = false;
  }

}
