import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesPageComponent } from './utilities-page.component';

describe('UtilitiesPageComponent', () => {
  let component: UtilitiesPageComponent;
  let fixture: ComponentFixture<UtilitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
