import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent implements OnInit {

  constructor(private title : Title) { }

 ngOnInit(): void {
  this.title.setTitle('Nos engagements');
   // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
