import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './u-detail.page.html',
  styleUrls: ['./u-detail.page.scss'],
})
export class UDetailPage {
  showUser = false;
  showVehicle = false;

  toggle(choice: string) {
    if (choice === 'user') {
      this.showUser = true;
      this.showVehicle = false;
    } else if (choice === 'vehicle') {
      this.showUser = false;
      this.showVehicle = true;
    }
  }
}
