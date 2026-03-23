import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Title} from '@angular/platform-browser'; 

@Component({
  selector: 'app-raison',
  templateUrl: './raison.component.html',
  styleUrl: './raison.component.css'
})
export class RaisonComponent implements OnInit, AfterViewInit {



  constructor(private title : Title){}


  ngAfterViewInit(): void {
     this.animateTexts();
  }

  ngOnInit(): void {
    this.title.setTitle('Pourquoi nous choisir');
    // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  animateTexts() {

    const elements = document.querySelectorAll(".animate-text");
  
    elements.forEach((el: any) => {
  
      const text = el.innerText;
      el.innerHTML = "";
  
      // transformer chaque lettre en span
      text.split("").forEach((letter: string) => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.opacity = "0";
        el.appendChild(span);
      });
  
      const letters = el.querySelectorAll("span");
  
      // animation typewriting déclenchée au scroll
      gsap.to(letters, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // quand l'élément arrive à 80% de l'écran
          toggleActions: "play none none none"
        }
      });
  
    });
  
  }

}
