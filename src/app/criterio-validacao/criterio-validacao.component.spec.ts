import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterioValidacaoComponent } from './criterio-validacao.component';

describe('InputManualComponent', () => {
  let component: CriterioValidacaoComponent;
  let fixture: ComponentFixture<CriterioValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriterioValidacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriterioValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
