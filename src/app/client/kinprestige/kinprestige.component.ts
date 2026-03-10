import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-kinprestige',
  templateUrl: './kinprestige.component.html',
  styleUrl: './kinprestige.component.css'
})
export class KinprestigeComponent implements OnInit {

  loading: boolean = true;
  showCookieModal = false;
  showScrollButton: boolean = false; // Nouvelle propriété pour le bouton

  ngOnInit() {
    // Simuler le chargement de la page
    setTimeout(() => {
      this.loading = false;
      
      // Gestion du cookie modal après le chargement
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        this.showCookieModal = true;
      }
    }, 1000);
    
    // Alternative : utiliser les événements de chargement du navigateur
    if (document.readyState === 'complete') {
      this.loading = false;
    } else {
      window.addEventListener('load', () => {
        this.loading = false;
      });
    }
  }
  
  // Détecter le scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Afficher le bouton après avoir scrollé de 300px
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollPosition > 300;
  }

  // Fonction pour remonter en haut de page
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Pour un défilement fluide
    });
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