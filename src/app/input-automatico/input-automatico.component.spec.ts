import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAutomaticoComponent } from './input-automatico.component';

describe('InputManualComponent', () => {
  let component: InputAutomaticoComponent;
  let fixture: ComponentFixture<InputAutomaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAutomaticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputAutomaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
