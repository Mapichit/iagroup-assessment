import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment1HeroComponent } from './assessment1-hero.component';

describe('Assessment1HeroComponent', () => {
  let component: Assessment1HeroComponent;
  let fixture: ComponentFixture<Assessment1HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assessment1HeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assessment1HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
