import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinprestige',
  templateUrl: './kinprestige.component.html',
  styleUrl: './kinprestige.component.css'
})
export class KinprestigeComponent implements OnInit {

  loading: boolean = true; // Ajout de la propriété loading
  showCookieModal = false;

  ngOnInit() {
    // Simuler le chargement de la page
    setTimeout(() => {
      this.loading = false; // Cache le spinner après le chargement
      
      // Gestion du cookie modal après le chargement
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        this.showCookieModal = true;
      }
    }, 1000); // Ajustez le délai selon vos besoins
    
    // Alternative : utiliser les événements de chargement du navigateur
    if (document.readyState === 'complete') {
      this.loading = false;
    } else {
      window.addEventListener('load', () => {
        this.loading = false;
      });
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