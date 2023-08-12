import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmAppointmentPage } from './adm-appointment.page';

describe('AdmAppointmentPage', () => {
  let component: AdmAppointmentPage;
  let fixture: ComponentFixture<AdmAppointmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
