import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

interface Vehicle {
  make: string;
  model: string;
  year: string;
  engineType: string;
  license: string;
}

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-u-detail',
  templateUrl: './u-detail.page.html',
  styleUrls: ['./u-detail.page.scss'],
})
export class UDetailPage {
  showUser: boolean = false;
  showVehicle: boolean = false;
  vehicleForm: FormGroup;
  vehicles: Vehicle[] = [];
  newVehicle: Vehicle = {
    make: '',
    model: '',
    year: '',
    engineType: '',
    license: ''
  };

  users: User[] = [];
  newUser: User = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private storage: Storage) {
    this.init();
    this.vehicleForm = new FormGroup({
      'make': new FormControl(null),
      'model': new FormControl(null),
      'year': new FormControl(null),
      'engineType': new FormControl(null),
      'license': new FormControl(null, Validators.required)
    });
  }

  // Initialize storage and retrieve data
  async init() {
    await this.storage.create();
    this.vehicles = await this.storage.get('vehicles') || [];
    this.users = await this.storage.get('users') || [];
  }


  // Add a new user and save to storage
  async saveUser() {
    this.users.push(this.newUser);
    await this.storage.set('users', this.users);
    this.newUser = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    };
  }

  // Delete user from list and update storage
  async deleteUser(index: number) {
    this.users.splice(index, 1);
    await this.storage.set('users', this.users);
  }


  // Add a new vehicle and save to storage
  async saveVehicle() {
    this.vehicles.push(this.newVehicle);
    await this.storage.set('vehicles', this.vehicles);
    this.newVehicle = {
      make: '',
      model: '',
      year: '',
      engineType: '',
      license: ''
    };
    this.vehicleForm.reset();
  }

   // Delete vehicle from list and update storage
   async deleteVehicle(index: number) {
    this.vehicles.splice(index, 1);
    await this.storage.set('vehicles', this.vehicles);
  }

  // Toggle visibility of user or vehicle form
  toggle(form: string) {
    if (form === 'user') {
      this.showUser = !this.showUser;
      this.showVehicle = false;
    } else if (form === 'vehicle') {
      this.showVehicle = !this.showVehicle;
      this.showUser = false;
    }
  }
}
