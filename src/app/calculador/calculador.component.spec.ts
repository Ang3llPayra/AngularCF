import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadorComponent } from './calculador.component';

describe('CalculadorComponent', () => {
  let component: CalculadorComponent;
  let fixture: ComponentFixture<CalculadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
