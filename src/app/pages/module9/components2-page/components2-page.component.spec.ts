import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components2PageComponent } from './components2-page.component';

describe('Components2PageComponent', () => {
  let component: Components2PageComponent;
  let fixture: ComponentFixture<Components2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Components2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
