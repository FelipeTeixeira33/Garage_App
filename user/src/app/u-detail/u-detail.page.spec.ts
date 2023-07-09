import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UDetailPage } from './u-detail.page';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UDetailPage', () => {
  let component: UDetailPage;
  let fixture: ComponentFixture<UDetailPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UDetailPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
