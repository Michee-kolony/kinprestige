import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raison',
  templateUrl: './raison.component.html',
  styleUrl: './raison.component.css'
})
export class RaisonComponent implements OnInit {

  ngOnInit(): void {
    // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
