import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {
  loggedInUser: string = '';

  // Constructor with dependencies injected
  constructor(private storage: Storage, private router: Router, private menuCtrl: MenuController) { }

  async ngOnInit() {
    // Initialize storage
    await this.storage.create();

    // Get logged-in user's email from storage
    this.loggedInUser = await this.storage.get('loggedInUser');
  }

    // Method to logout the user, close the menu, and redirect to the home page
    async logout(): Promise<void> {
      await this.storage.remove('loggedInUser');  
      await this.menuCtrl.close();                
      this.router.navigateByUrl('/home');        
    }
  }
