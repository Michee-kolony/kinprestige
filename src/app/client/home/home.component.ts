import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Important pour activer ScrollTrigger

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ⬅ pluriel obligatoire
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    // Animate stat1
    this.animateNumber('#stat1', 6, 2); // 9000 en 2 secondes
    this.animateNumber('#stat2', 95, 2);
    this.animateNumber('#stat3', 8, 2);
    this.animateNumber('#stat4', 24, 2);
  }

  animateNumber(selector: string, endValue: number, duration: number) {
    const element = document.querySelector(selector) as HTMLElement; // ⬅ cast en HTMLElement
    if (!element) return;

    gsap.fromTo(
      element,
      { innerText: '0' }, // gsap fonctionne mieux avec string pour innerText
      {
        innerText: endValue.toString(),
        duration: duration,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // déclenche quand l'élément est visible à 80% du viewport
          toggleActions: "play none none none",
        },
        snap: { innerText: 1 }, // pour nombres entiers
        ease: "power1.out",
        onUpdate: function () {
          element.innerText = Math.floor(Number(element.innerText)).toLocaleString();
        }
      }
    );
  }

ngOnInit(): void {
  
}

}