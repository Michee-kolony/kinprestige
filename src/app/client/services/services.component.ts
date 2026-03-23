import { Component, AfterViewInit, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: []
})
export class ServicesComponent implements AfterViewInit, OnInit {


constructor(private title: Title){}

  ngOnInit(): void {
     this.title.setTitle("Nos services");
    // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    // Initialisation du carrousel Splide avec animation verticale
    const splide = new Splide('#services-splide', {
      type: 'loop',           // Changé de 'fade' à 'loop' pour permettre l'animation
      perPage: 1,
      perMove: 1,
      autoplay: false,
      arrows: true,
      pagination: true,
      speed: 800,
      rewind: true,
      gap: '0',
      pauseOnHover: true,
      pauseOnFocus: true,
      drag: true,
      swipe: true,
      keyboard: true,
      direction: 'ttb',       // Ajout de direction 'ttb' (top to bottom)
      height: '100vh',        // Hauteur fixe pour l'animation verticale
      wheel: true,            // Optionnel : permet la navigation avec la molette
    }).mount();

    // Animation supplémentaire lors du changement de slide
    splide.on('mounted move', () => {
      const slides = document.querySelectorAll('.splide__slide');
      slides.forEach(slide => {
        slide.classList.add('transition-opacity', 'duration-800', 'ease-in-out');
      });
    });
  }
}