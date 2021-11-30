import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleiComponent } from './volei.component';

describe('VoleiComponent', () => {
  let component: VoleiComponent;
  let fixture: ComponentFixture<VoleiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoleiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoleiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
