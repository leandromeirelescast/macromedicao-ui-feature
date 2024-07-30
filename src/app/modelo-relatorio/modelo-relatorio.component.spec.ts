import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloRelatorioComponent } from './modelo-relatorio.component';

describe('ModeloRelatorioComponent', () => {
  let component: ModeloRelatorioComponent;
  let fixture: ComponentFixture<ModeloRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloRelatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
