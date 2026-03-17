import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent implements OnInit {

  constructor() { }

 ngOnInit(): void {
   // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
