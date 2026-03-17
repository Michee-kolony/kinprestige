import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: false
})
export class InViewDirective implements OnInit, OnDestroy {
  @Output() appInView = new EventEmitter<void>();

  private observer: IntersectionObserver | null = null;
  private hasEmitted = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.appInView.emit();
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasEmitted) {
            this.hasEmitted = true;
            this.appInView.emit();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
