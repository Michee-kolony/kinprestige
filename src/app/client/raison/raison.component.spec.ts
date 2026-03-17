import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisonComponent } from './raison.component';

describe('RaisonComponent', () => {
  let component: RaisonComponent;
  let fixture: ComponentFixture<RaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
