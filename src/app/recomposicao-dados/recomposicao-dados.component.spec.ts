import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomposicaoDadosComponent } from './recomposicao-dados.component';

describe('InputManualComponent', () => {
  let component: RecomposicaoDadosComponent;
  let fixture: ComponentFixture<RecomposicaoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomposicaoDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomposicaoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
