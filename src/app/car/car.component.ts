import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  carName = "car";
  carYear = 5555;

  getName() {
  return  this.carName
  }
}
