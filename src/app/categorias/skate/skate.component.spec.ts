import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skateComponent } from './skate.component';

describe('skateComponent', () => {
  let component: skateComponent;
  let fixture: ComponentFixture<skateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ skateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(skateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
