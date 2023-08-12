import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-home',
  templateUrl: './u-home.page.html',
  styleUrls: ['./u-home.page.scss'],
})
export class UHomePage implements OnInit {
  loggedInUser: string = '';

  // Constructor with dependencies injected
  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    // Initialize storage
    await this.storage.create();

    // Get logged-in user's email from storage
    this.loggedInUser = await this.storage.get('loggedInUser');
  }
}
