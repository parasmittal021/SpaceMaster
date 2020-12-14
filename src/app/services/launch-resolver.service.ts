import { Injectable } from '@angular/core';
import {  Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchResolverService implements Resolve<any> {

  constructor() { }
  resolve(): Observable<any> {
    return of(true);
  }
}
