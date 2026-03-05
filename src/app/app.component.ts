import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kinprestige';
  currentYear = new Date().getFullYear();

  /** Chiffre « 24+ » dans la section À propos */
  aboutExp = 0;
  private aboutExpAnimated = false;

  /** Statistiques (section verte) */
  stat1 = 0;  // 24+
  stat2 = 0;  // 9k+
  stat3 = 0;  // 520+
  stat4 = 0;  // 24
  private statsAnimated = false;

  private readonly DURATION = 1600;
  private readonly TARGETS = { about: 24, s1: 24, s2: 9, s3: 520, s4: 24 };

  constructor(private cdr: ChangeDetectorRef) {}

  onSubmitContact(event: Event): void {
    event.preventDefault();
    alert('Merci pour votre message. Nous vous recontacterons rapidement.');
  }

  /** Déclenche l’animation du « 24+ » dans À propos quand la section entre dans le viewport. */
  onAboutExpInView(): void {
    if (this.aboutExpAnimated) return;
    this.aboutExpAnimated = true;
    this.animateValue(0, this.TARGETS.about, (v) => {
      this.aboutExp = Math.round(v);
      this.cdr.markForCheck();
    });
  }

  /** Déclenche l’animation des 4 statistiques quand la section entre dans le viewport. */
  onStatsInView(): void {
    if (this.statsAnimated) return;
    this.statsAnimated = true;
    this.animateValue(0, this.TARGETS.s1, (v) => {
      this.stat1 = Math.round(v);
      this.cdr.markForCheck();
    });
    this.animateValue(0, this.TARGETS.s2, (v) => {
      this.stat2 = Math.round(v);
      this.cdr.markForCheck();
    });
    this.animateValue(0, this.TARGETS.s3, (v) => {
      this.stat3 = Math.round(v);
      this.cdr.markForCheck();
    });
    this.animateValue(0, this.TARGETS.s4, (v) => {
      this.stat4 = Math.round(v);
      this.cdr.markForCheck();
    });
  }

  /**
   * Anime une valeur de start à end sur DURATION ms avec ease-out,
   * en appelant setValue à chaque frame.
   */
  private animateValue(
    start: number,
    end: number,
    setValue: (value: number) => void
  ): void {
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / this.DURATION, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      const value = start + (end - start) * easeOut;
      setValue(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
