import { ComponentFixture, TestBed } from '@angular/core/testing';

import { futsalComponent } from './futsal.component';

describe('futsalComponent', () => {
  let component: futsalComponent;
  let fixture: ComponentFixture<futsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ futsalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(futsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
