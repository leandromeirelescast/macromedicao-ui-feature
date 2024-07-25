import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeNegocioComponent } from './unidade-negocio.component';

describe('UnidadeNegocioComponent', () => {
  let component: UnidadeNegocioComponent;
  let fixture: ComponentFixture<UnidadeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeNegocioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
