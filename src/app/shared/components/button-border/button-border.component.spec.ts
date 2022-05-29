import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBorderComponent } from './button-border.component';

describe('ButtonBorderComponent', () => {
  let component: ButtonBorderComponent;
  let fixture: ComponentFixture<ButtonBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
