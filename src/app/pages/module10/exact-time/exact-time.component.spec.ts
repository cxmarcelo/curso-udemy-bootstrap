import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactTimeComponent } from './exact-time.component';

describe('ExactTimeComponent', () => {
  let component: ExactTimeComponent;
  let fixture: ComponentFixture<ExactTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExactTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
