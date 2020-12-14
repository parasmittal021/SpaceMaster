import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpaceDataService } from 'src/app/services/space-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute,private spaceDataService:SpaceDataService) { }
  observableSubscription: Subscription;
  viewdata: any;
  username: string = "Paras Mittal";
  year = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  trueorfalse = [{
    name: 'True',
    value: true
  },
  {
    name: 'False',
    value: false
  }];
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.observableSubscription=    this.spaceDataService.getAllData(params).subscribe((response)=>{
        this.viewdata=response;
      })
    });
  }
  removeParams(routerLink: any[], queryParam: { [key: string]: string }) {
    const queryParams = Object.assign({}, ...Object.keys(queryParam).map(data => ({ [data]: null })));
    this.router.navigate(routerLink, {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }
  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
  }
  
}
