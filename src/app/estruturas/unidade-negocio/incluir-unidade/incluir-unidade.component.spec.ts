import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirUnidadeComponent } from './incluir-unidade.component';

describe('IncluirUnidadeComponent', () => {
  let component: IncluirUnidadeComponent;
  let fixture: ComponentFixture<IncluirUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirUnidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluirUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
