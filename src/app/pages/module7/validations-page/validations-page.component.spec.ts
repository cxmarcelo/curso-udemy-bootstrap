import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationsPageComponent } from './validations-page.component';

describe('ValidationsPageComponent', () => {
  let component: ValidationsPageComponent;
  let fixture: ComponentFixture<ValidationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
