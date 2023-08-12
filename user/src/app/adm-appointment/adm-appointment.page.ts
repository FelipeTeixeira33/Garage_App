import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

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
  selector: 'app-adm-appointment',
  templateUrl: './adm-appointment.page.html',
  styleUrls: ['./adm-appointment.page.scss'],
})

export class AdmAppointmentPage implements OnInit {
  currentBookings: any[] = [];
  currentUser?: User;
  currentVehicle?: Vehicle;
  statuses: string[] = ['Pending', 'Confirmed', 'Cancelled', 'Progressing', 'Completed'];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadBookingsFromIonicStorage();
    this.loadUserDetails();
    this.loadVehicleDetails();
  }

  // Load appointments from storage
  async loadBookingsFromIonicStorage() {
    const storedBookings = await this.storage.get('appointments');
    if (storedBookings) {
      this.currentBookings = storedBookings;
    }
  }

  // Load the latest user details
  async loadUserDetails() {
    const storedUsers = await this.storage.get('users');
    if (storedUsers) {
      this.currentUser = storedUsers[storedUsers.length - 1];
    }
  }

  // Load the latest vehicle details
  async loadVehicleDetails() {
    const storedVehicles = await this.storage.get('vehicles');
    if (storedVehicles) {
      this.currentVehicle = storedVehicles[storedVehicles.length - 1];
    }
  }

  // Update the status of a booking
  updateStatus(booking: any, event: any) {
    booking.status = event.detail.value;
    const idx = this.currentBookings.findIndex(b => b.date === booking.date && b.time === booking.time);
    if (idx !== -1) {
      this.currentBookings[idx].status = booking.status;
    }
    this.storage.set('appointments', this.currentBookings);
  }

  // Delete a booking
  deleteBooking(index: number) {
    this.currentBookings.splice(index, 1);
  }
}
