import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersPageComponent } from './helpers-page.component';

describe('HelpersPageComponent', () => {
  let component: HelpersPageComponent;
  let fixture: ComponentFixture<HelpersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
