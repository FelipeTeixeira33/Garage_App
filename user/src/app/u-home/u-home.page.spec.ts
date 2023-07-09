import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UHomePage } from './u-home.page';

describe('UHomePage', () => {
  let component: UHomePage;
  let fixture: ComponentFixture<UHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
