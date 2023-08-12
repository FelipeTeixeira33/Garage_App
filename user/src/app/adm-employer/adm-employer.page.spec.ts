import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmEmployerPage } from './adm-employer.page';

describe('AdmEmployerPage', () => {
  let component: AdmEmployerPage;
  let fixture: ComponentFixture<AdmEmployerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmEmployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
