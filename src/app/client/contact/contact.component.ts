import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
     // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
