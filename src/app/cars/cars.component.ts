import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  canAddCard = false;
  carName = '';
  addCarStatus = false;
  inputText1 = '';
  inputText2 = 'Default text';
  cars = ['ford', 'audi', 'bmw', 'masda', 'laflala', 'fafaffa'];
  items = [
    {
      id: 3,
      name: 'item1'
    },
    {
      id: 6,
      name: 'item2'
    },
    {
      id: 9,
      name: 'item3'
    },
  ];

  itemsData=[
    new Date(2020, 20,12).toDateString(),
    new Date(2021, 20,12).toDateString(),
    new Date(2022, 20,12).toDateString(),
    new Date(2027, 20,12).toDateString(),
    new Date(2029, 20,12).toDateString(),
  ];

  constructor() {
    setTimeout(() => {
      this.canAddCard = true;
    }, 3000)
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  onKeyUp1(value: any) {
    this.inputText1 = value;
  }

  onKeyUp2(event: any) {
    this.inputText2 = event.target.value;
  }

  setBigText(car: string) {
    return car.length > 4 ? true : false;
  }
}
