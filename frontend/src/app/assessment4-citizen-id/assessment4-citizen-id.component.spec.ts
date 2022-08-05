import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment4CitizenIdComponent } from './assessment4-citizen-id.component';

describe('Assessment4CitizenIdComponent', () => {
  let component: Assessment4CitizenIdComponent;
  let fixture: ComponentFixture<Assessment4CitizenIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assessment4CitizenIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assessment4CitizenIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
