import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UBookingPage } from './u-booking.page';

describe('UBookingPage', () => {
  let component: UBookingPage;
  let fixture: ComponentFixture<UBookingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
