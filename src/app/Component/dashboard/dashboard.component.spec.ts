import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpaceDataService } from 'src/app/services/space-data.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let trueorfalse = [{name: 'True',value: true},{ name: 'False', value: false }];
  let router: Router;
  beforeEach(() => {
    const activatedRouteStub = () => ({
      queryParams: { subscribe: f => f({}) }
    });
    const routerStub = () => ({ navigate: (routerLink, object) => ({}) });
    const spaceDataServiceStub = () => ({
      getAllData: params => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: SpaceDataService, useFactory: spaceDataServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`username has default value`, () => {
    expect(component.username).toEqual(`Paras Mittal`);
  });

  it(`year has default value`, () => {
    expect(component.year).toEqual([
      `2006`,
      `2007`,
      `2008`,
      `2009`,
      `2010`,
      `2011`,
      `2012`,
      `2013`,
      `2014`,
      `2015`,
      `2016`,
      `2017`,
      `2018`,
      `2019`,
      `2020`
    ]);
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

  it('Trueorfalse has default value', () => {
    expect(component.trueorfalse).toEqual(trueorfalse);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const spaceDataServiceStub: SpaceDataService = fixture.debugElement.injector.get(
        SpaceDataService
      );
      spyOn(spaceDataServiceStub, 'getAllData').and.callThrough();
      component.ngOnInit();
      expect(spaceDataServiceStub.getAllData).toHaveBeenCalled();
    });
  });
});
