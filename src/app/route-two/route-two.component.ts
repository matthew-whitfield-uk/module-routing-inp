import { Component } from '@angular/core';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent {


  constructor() {


    const endTime = Date.now() + 2000; // 2 seconds later
    let result = 0;

    while (Date.now() < endTime) {
        result += Math.sqrt(Math.random()); // Perform some math operation
    }

    return result;
  }

}
