import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  // Define the app navigation links
  public appPages = [
    { title: 'Home', url: '/u-home', icon: 'home' },
    { title: 'Details', url: '/u-detail', icon: 'add' },
    { title: 'Appointment', url: '/u-appointment', icon: 'construct' },
    { title: 'Booking', url: '/u-booking', icon: 'reader' },
  ];

  // Constructor to inject the required services
  constructor(
    private storage: Storage, 
    private router: Router, 
    private menuCtrl: MenuController
  ) {}
  
  // Method to logout the user, close the menu, and redirect to the home page
  async logout(): Promise<void> {
    await this.storage.remove('loggedInUser');  
    await this.menuCtrl.close();                
    this.router.navigateByUrl('/home');        
  }
}
