import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesPageComponent } from './examples-page.component';

describe('ExamplesPageComponent', () => {
  let component: ExamplesPageComponent;
  let fixture: ComponentFixture<ExamplesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
