import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';
import { ISpaceDataModel } from '../Model/spaceData';
@Injectable({
  providedIn: 'root'
})
export class SpaceDataService {

  constructor(private http: HttpClient) { }

  getAllData(data:Params): Observable<ISpaceDataModel[]> {
    return this.http.get<ISpaceDataModel[]>('https://api.spaceXdata.com/v3/launches',{params: data}).pipe(map(response => response));
  }
}
