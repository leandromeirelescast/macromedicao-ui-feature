import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturasComponent } from './estruturas.component';

describe('EstruturasComponent', () => {
  let component: EstruturasComponent;
  let fixture: ComponentFixture<EstruturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstruturasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstruturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
