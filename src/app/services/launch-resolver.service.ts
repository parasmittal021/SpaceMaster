import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceDataService } from 'src/app/services/space-data.service';

@Injectable({
  providedIn: 'root'
})
export class LaunchResolverService implements Resolve<any> {

  constructor(private spaceDataService: SpaceDataService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.spaceDataService.getAllData({limit: 100, ...route.queryParams});
  }
}
