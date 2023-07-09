import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/u-home', icon: 'home' },
    { title: 'Details', url: '/u-detail', icon: 'add' },
    { title: 'Appointment', url: '/u-appointment', icon: 'construct' },
    
  ];
  constructor() {}
}
