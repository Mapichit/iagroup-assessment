import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment3TriangleComponent } from './assessment3-triangle.component';

describe('Assessment3TriangleComponent', () => {
  let component: Assessment3TriangleComponent;
  let fixture: ComponentFixture<Assessment3TriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assessment3TriangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assessment3TriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
