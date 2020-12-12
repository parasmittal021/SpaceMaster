import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceMaster';

  constructor(private router: Router) { }

  ngOnInit() {
    const queryParams: Params = { limit: 100 };

    this.router.navigate(
      ['v3/launches'],
      {
        queryParams: queryParams
      });
  }

}
