import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinprestigeComponent } from './kinprestige.component';

describe('KinprestigeComponent', () => {
  let component: KinprestigeComponent;
  let fixture: ComponentFixture<KinprestigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KinprestigeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinprestigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
