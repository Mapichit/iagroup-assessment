import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment5DiamondComponent } from './assessment5-diamond.component';

describe('Assessment5DiamondComponent', () => {
  let component: Assessment5DiamondComponent;
  let fixture: ComponentFixture<Assessment5DiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assessment5DiamondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assessment5DiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
