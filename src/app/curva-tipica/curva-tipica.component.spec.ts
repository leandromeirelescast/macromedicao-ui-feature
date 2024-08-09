import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvaTipicaComponent } from './curva-tipica.component';

describe('InputManualComponent', () => {
  let component: CurvaTipicaComponent;
  let fixture: ComponentFixture<CurvaTipicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurvaTipicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurvaTipicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
