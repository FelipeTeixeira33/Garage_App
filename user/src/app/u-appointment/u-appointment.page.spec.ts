import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UAppointmentPage } from './u-appointment.page';

describe('UAppointmentPage', () => {
  let component: UAppointmentPage;
  let fixture: ComponentFixture<UAppointmentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UAppointmentPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

