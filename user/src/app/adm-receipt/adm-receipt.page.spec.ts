import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmReceiptPage } from './adm-receipt.page';

describe('AdmReceiptPage', () => {
  let component: AdmReceiptPage;
  let fixture: ComponentFixture<AdmReceiptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
