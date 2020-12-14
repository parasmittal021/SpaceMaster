import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpaceDataModel, SpaceDataModel } from 'src/app/Model/spaceData';
import { SpaceDataService } from 'src/app/services/space-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private spaceDataService: SpaceDataService) { }

  viewdata: SpaceDataModel[]=[];
  spaceData: ISpaceDataModel[];
  singleViewdata:SpaceDataModel;
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
 this.spaceDataService.getAllData(params).subscribe((response) => {
        this.spaceData = response;
        this.viewdata=[];
        for(let i=0;i<this.spaceData.length;i++){
          this.singleViewdata=new SpaceDataModel(this.spaceData[i]);
          this.viewdata.push(this.singleViewdata);
        }
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
 

}
