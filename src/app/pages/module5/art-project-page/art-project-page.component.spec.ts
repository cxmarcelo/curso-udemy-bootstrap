import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtProjectPageComponent } from './art-project-page.component';

describe('ArtProjectPageComponent', () => {
  let component: ArtProjectPageComponent;
  let fixture: ComponentFixture<ArtProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtProjectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
