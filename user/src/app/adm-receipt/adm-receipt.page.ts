import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-adm-receipt',
  templateUrl: './adm-receipt.page.html',
  styleUrls: ['./adm-receipt.page.scss'],
})
export class AdmReceiptPage implements OnInit {
  // Variables to store customer and service information
  firstName: string = '';
  secondName: string = '';
  customerCar: string = '';
  serviceType: string = 'Annual Service';
  servicePrice: number = 500; // Initial value for 'Annual Service'

  ngOnInit() {}

  // Returns the price for a specified service type
  getPriceForService(serviceType: string): number {
    switch (serviceType) {
      case 'Annual Service':
        return 500;
      case 'Major Service':
        return 400;
      case 'Repair/Fault':
        return 200;
      case 'Major Repair':
        return 300;
      default:
        return 0;
    }
  }

  // Updates the service price when the service type changes
  updateServicePrice() {
    this.servicePrice = this.getPriceForService(this.serviceType);
  }

  // Generates and prints a receipt using the jsPDF library
  printReceipt() {
    const doc = new jsPDF();
    doc.text('GER GARAGE RECEIPT!', 10, 20);
    doc.text(`First Name: ${this.firstName}`, 10, 40);
    doc.text(`Second Name: ${this.secondName}`, 10, 50);
    doc.text(`Customer Car: ${this.customerCar}`, 10, 60);
    doc.text(`Type of Service: ${this.serviceType}`, 10, 70);
    doc.text(`Price: $${this.servicePrice}`, 10, 80);
    doc.text('Thank you!', 10, 100);
    doc.save('Receipt.pdf');
  }
}
