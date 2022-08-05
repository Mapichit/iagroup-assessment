import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assissment2ApiCallComponent } from './assissment2-api-call.component';

describe('Assissment2ApiCallComponent', () => {
  let component: Assissment2ApiCallComponent;
  let fixture: ComponentFixture<Assissment2ApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assissment2ApiCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assissment2ApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
