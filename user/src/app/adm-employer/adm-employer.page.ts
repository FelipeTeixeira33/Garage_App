import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Employee {
  firstName: string;
  secondName: string;
  position: string;
}

@Component({
  selector: 'app-adm-employer',
  templateUrl: './adm-employer.page.html',
  styleUrls: ['./adm-employer.page.scss'],
})
export class AdmEmployerPage {
  newEmployee: Employee = { firstName: '', secondName: '', position: '' };
  employees: Employee[] = [];
  editingEmployeeIndex: number | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Initialize storage and get existing employees
  async init() {
    await this.storage.create();
    this.employees = (await this.storage.get('employees')) || [];
  }

  // Add a new employee to the list and update storage
  async addEmployee() {
    if (this.newEmployee.firstName && this.newEmployee.secondName && this.newEmployee.position) {
      this.employees.push({ ...this.newEmployee });
      this.newEmployee = { firstName: '', secondName: '', position: '' };
      await this.storage.set('employees', this.employees);
    }
  }

  // Remove an employee from the list and update storage
  async deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    await this.storage.set('employees', this.employees);
  }

  // Edit an employee's details
  editEmployee(index: number) {
    this.newEmployee = this.employees[index];
    this.editingEmployeeIndex = index;
  }

  // Save edited employee details and update storage
  async saveEmployee() {
    if (this.editingEmployeeIndex !== null) {
      this.employees[this.editingEmployeeIndex] = this.newEmployee;
    }
    this.newEmployee = { firstName: '', secondName: '', position: '' };
    this.editingEmployeeIndex = null;
    await this.storage.set('employees', this.employees);
  }
}
