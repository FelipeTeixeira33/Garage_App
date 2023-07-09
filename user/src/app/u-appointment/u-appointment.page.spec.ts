import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UAppointmentPage } from './u-appointment.page';

describe('UAppointmentPage', () => {
  let component: UAppointmentPage;
  let fixture: ComponentFixture<UAppointmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
