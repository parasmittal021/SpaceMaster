import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let year = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let trueorfalse = [{name: 'True',value: true},{ name: 'False', value: false }];
  let router: Router;
  let route: ActivatedRoute;
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance; 
    fixture.detectChanges();
    router=TestBed.inject(Router);
    route=TestBed.inject(ActivatedRoute);
  })

  it('Can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('Username has default value', () => {
    expect(component.username).toEqual("Paras Mittal");
  });

  it('Year has default value', () => {
    expect(component.year).toEqual(year);
  });

  it('Trueorfalse has default value', () => {
    expect(component.trueorfalse).toEqual(trueorfalse);
  });
  it('RemoveParams method testing merge parameter', () => {
    const spy = spyOn(router, 'navigate');
    component.removeParams([''], {limit: '100'});
    expect(spy.calls.mostRecent().args[1].queryParamsHandling).toEqual('merge');
  });
  it('RemoveParams method testing limit parameter', () => {
    const spy = spyOn(router, 'navigate');
    component.removeParams([''], {limit: '100'});
    expect(spy.calls.mostRecent().args[1].queryParams.limit).toBeNull();
  });

it('Unsubscription',()=>{
component.observableSubscription = new Subscription();
const subscription = spyOn(component.observableSubscription, 'unsubscribe').and.callThrough();
  component.ngOnDestroy();
  expect(subscription).toHaveBeenCalled();
});

});
