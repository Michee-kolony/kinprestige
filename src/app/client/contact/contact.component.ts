import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {


  constructor(private title: Title){}

  ngOnInit(): void {

    this.title.setTitle('Demander un devis');
     // Scroll automatique en haut de la page
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
