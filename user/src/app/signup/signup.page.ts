import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private storage: Storage, private router: Router) { }

  async ngOnInit() {
    await this.storage.create();
  }

  // Convert password to base64 format
  private hashPassword(password: string): string {
    return btoa(password);
  }

  async register() {
    // Validate email
    if (!this.email.trim()) {
      this.errorMessage = "Please, insert an email.";
      return;
    }

    // Validate password length
    if (!this.password.trim() || this.password.length < 6) {
      this.errorMessage = "Password should be at least 6 characters.";
      return;
    }

    // Hash password
    const hashedPassword = this.hashPassword(this.password);

    // Check if user already exists
    const existingUser = await this.storage.get(`user_${this.email}`);
    if (existingUser) {
      this.errorMessage = "This email is already registered.";
      return;
    }

    // Save user data
    const user = {
      email: this.email,
      password: hashedPassword
    };

    await this.storage.set(`user_${this.email}`, user);

    // Redirect to login
    this.router.navigateByUrl('/login');
}

  // Remove all emails from storage
  async clearAllEmails() {
    try {
      await this.storage.clear();
      console.log("All emails removed!");
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}
