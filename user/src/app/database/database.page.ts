import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {
  emails: string[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadEmails();
  }

  async loadEmails() {
    try {
      const allKeys = await this.storage.keys();
      const userKeys = allKeys.filter(key => key.startsWith('user_'));
      
      this.emails = [];

      for (const key of userKeys) {
        const user = await this.storage.get(key);
        this.emails.push(user.email);
      }
    } catch (error) {
      console.error('Error fetching registered emails:', error);
    }
  }

  async deleteUser(email: string) {
    try {
      await this.storage.remove(`user_${email}`);
      this.loadEmails();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}