import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

interface User {
  firstName: string;
  lastName: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: string;
}

@Component({
  selector: 'app-u-appointment',
  templateUrl: './u-appointment.page.html',
  styleUrls: ['./u-appointment.page.scss'],
})
export class UAppointmentPage implements OnInit {
  currentUser: User = { firstName: '', lastName: '' };
  currentVehicle: Vehicle = { make: '', model: '', year: '' };
  selectedDate: string = new Date().toISOString();
  selectedService!: string;

  constructor(private storage: Storage, private router: Router) {}

  isSundaySelected: boolean = false; 
  selectedTime: string | null = null;
  userDescription: string = '';  
  errorMessage: string = '';
  currentBookings: any[] = [];

  // Initialize component data
  async ngOnInit() {
    await this.storage.create();
    this.currentUser = await this.getLastStoredUser();
    this.currentVehicle = await this.getLastStoredVehicle();
    this.selectedDate = new Date().toISOString().split('T')[0];
  }

  // Check if date is a Sunday
  isSunday(date: string): boolean {
    let d = new Date(date);
    return d.getUTCDay() === 0;  
  }

  // Update component state when date is changed
  dateChanged() {
    if (this.isSunday(this.selectedDate)) {
      this.isSundaySelected = true;
      this.errorMessage = "We are closed on sundays";
    } else {
      this.isSundaySelected = false;
      this.errorMessage = ""; 
    }
  }

  availableTimes: string[] = [
    "09:00", "10:30", "14:00", "16:00"
  ];

  // Confirm selected appointment time
  confirmTime() {
    if (this.selectedTime) {
      console.log('Time confirmed:', this.selectedTime);
      
      const newBooking = {
        date: this.selectedDate,
        time: this.selectedTime,
        service: this.selectedService,
        status: 'Pending',
        userDescription: this.userDescription
      };
  
      this.currentBookings.push(newBooking);
      this.updateBookingsInIonicStorage();
      this.router.navigate(['/u-booking']);
    } else {
      console.log('No time selected.');
    }
  }
  
  // Store updated bookings in Ionic storage
  async updateBookingsInIonicStorage() {
    await this.storage.set('appointments', this.currentBookings);
  }

  // Retrieve the last stored user from storage
  private async getLastStoredUser(): Promise<User> {
    const storedUsers: User[] = await this.storage.get('users');
    return storedUsers?.[storedUsers.length - 1] || { firstName: '', lastName: '' };
  }

  // Retrieve the last stored vehicle from storage
  private async getLastStoredVehicle(): Promise<Vehicle> {
    const storedVehicles: Vehicle[] = await this.storage.get('vehicles');
    return storedVehicles?.[storedVehicles.length - 1] || { make: '', model: '', year: '' };
  }
}
