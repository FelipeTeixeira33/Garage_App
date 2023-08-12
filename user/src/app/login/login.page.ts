import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private readonly ADMIN_EMAIL: string = 'adm';
  private readonly ADMIN_PASSWORD: string = 'adm123';

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    await this.storage.create();
  }

  private hashPassword(password: string): string {
    return btoa(password);
  }
  async login(): Promise<void> {
    this.errorMessage = '';

    // Check if user is admin
    if (this.email === this.ADMIN_EMAIL && this.password === this.ADMIN_PASSWORD) {
        await this.storage.set('loggedInUser', this.email); // <-- Store the logged-in user's email
        this.router.navigateByUrl('/adm');
        return;
    }

    // Get user from storage
    const storedUser = await this.storage.get(`user_${this.email}`);

    // If user doesn't exist
    if (!storedUser) {
        this.errorMessage = 'Email not found, please try again';
        return;
    }

    // If password is wrong
    if (this.hashPassword(this.password) !== storedUser.password) {
        this.errorMessage = 'Incorrect password, please try again!';
        return;
    }

    await this.storage.set('loggedInUser', this.email); // <-- Store the logged-in user's email
    // Navigate based on user role
    if (storedUser.role === 'admin') {
        this.router.navigateByUrl('/adm');
    } else {
        this.router.navigateByUrl('/u-home');
    }
  }

  
}
