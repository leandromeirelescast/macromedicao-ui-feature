import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputManualComponent } from './input-manual.component';

describe('InputManualComponent', () => {
  let component: InputManualComponent;
  let fixture: ComponentFixture<InputManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
