// navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { AppRoutingModule } from "../../app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  getMenuIconClass(position: string): string {
    const baseClasses = 'block w-6 h-0.5 bg-gray-600 transition-all duration-300 absolute';
    
    if (position === 'top') {
      return `${baseClasses} ${this.isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`;
    } else if (position === 'middle') {
      return `${baseClasses} ${this.isMenuOpen ? 'opacity-0' : 'opacity-100'}`;
    } else {
      return `${baseClasses} ${this.isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`;
    }
  }

  getMobileMenuClass(): string {
    const baseClasses = 'md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300';
    return `${baseClasses} ${this.isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`;
  }
}