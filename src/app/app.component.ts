import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'module-routing-inp';

  constructor(private router: Router){}

  loading:boolean = false;

  ngOnInit() {
    this.router.events.subscribe((event) => {


      if (event instanceof NavigationStart) {

        this.loading = true;
      }

      if (
        event instanceof NavigationEnd
      ) {



        this.loading = false;

      }



    });
  }
}
