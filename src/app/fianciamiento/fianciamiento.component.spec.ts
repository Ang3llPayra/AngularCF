import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FianciamientoComponent } from './fianciamiento.component';

describe('FianciamientoComponent', () => {
  let component: FianciamientoComponent;
  let fixture: ComponentFixture<FianciamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FianciamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FianciamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
