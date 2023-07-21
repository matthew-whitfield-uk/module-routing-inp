import { Component } from '@angular/core';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent {


  constructor(){

    const endTime = Date.now() + 2000; // 2 seconds later
    let result = 0;

    while (Date.now() < endTime) {
        result += Math.sqrt(Math.random()); // Perform some math operation
    }

    return result;
  }

}
