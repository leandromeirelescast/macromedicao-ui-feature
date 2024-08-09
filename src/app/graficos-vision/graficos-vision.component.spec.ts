import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVisionComponent } from './graficos-vision.component';

describe('GraficoVisionComponent', () => {
  let component: GraficoVisionComponent;
  let fixture: ComponentFixture<GraficoVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
