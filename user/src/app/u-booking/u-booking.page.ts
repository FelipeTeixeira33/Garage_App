import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

// Interfaces to define user and vehicle structures
interface User {
  firstName: string;
  lastName: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-u-booking',
  templateUrl: './u-booking.page.html',
  styleUrls: ['./u-booking.page.scss'],
})
export class UBookingPage implements OnInit {
  currentBookings: any[] = [];
  currentUser?: User;
  currentVehicle?: Vehicle;

  constructor(private router: Router, private storage: Storage) {
    // Attach event listener for storage changes
    window.addEventListener('storage', this.onStorageChange.bind(this));
  }

  async ngOnInit() {
    // Create storage if it doesn't exist
    await this.storage.create(); 
    this.loadBookingsFromIonicStorage();
    this.loadUserDetails();
    this.loadVehicleDetails();
  }

  // Load bookings from Ionic Storage
  async loadBookingsFromIonicStorage() {
    this.currentBookings = (await this.storage.get('appointments')) || [];
  }

  // Load user details from Ionic Storage
  async loadUserDetails() {
    const storedUsers = await this.storage.get('users');
    if (storedUsers) {
      this.currentUser = storedUsers[storedUsers.length - 1];
    }
  }

  // Load vehicle details from Ionic Storage
  async loadVehicleDetails() {
    const storedVehicles = await this.storage.get('vehicles');
    if (storedVehicles) {
      this.currentVehicle = storedVehicles[storedVehicles.length - 1];
    }
  }

  // Callback for storage change event
  onStorageChange(event: StorageEvent) {
    if (event.key === 'appointments') {
      this.loadBookingsFromIonicStorage();
    }
  }

  // Delete a specific booking and update Ionic Storage
  deleteBooking(index: number) {
    this.currentBookings.splice(index, 1);
    this.updateBookingsInIonicStorage();

    // Delete related user and vehicle data for simplicity (though in real-world, this might be undesirable)
    this.currentUser = undefined;
    this.currentVehicle = undefined;
  }

  // Update the bookings data in Ionic Storage
  async updateBookingsInIonicStorage() {
    await this.storage.set('appointments', this.currentBookings);
  }
}
