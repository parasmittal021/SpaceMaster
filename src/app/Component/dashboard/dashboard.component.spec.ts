import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpaceDataService } from 'src/app/services/space-data.service';
import { DashboardComponent } from './dashboard.component';
import { of, Subscription } from 'rxjs';
import { ISpaceDataModel, SpaceDataModel } from 'src/app/Model/spaceData';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let paramMapSubscription:Subscription;
  let trueorfalse = [{name: 'True',value: true},{ name: 'False', value: false }];
  let router: Router;
  let route: ActivatedRoute;
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
    paramMapSubscription = new Subscription();
    router=TestBed.inject(Router);
    route=TestBed.inject(ActivatedRoute);
    component.observableSubscription = new Subscription();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`viewdata has default value`, () => {
    expect(component.viewdata).toEqual([]);
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
  it('Creation of SpaceDataModel', () => {
    const spacedata :ISpaceDataModel[]= [{
      mission_name: 'ABC',
      flight_number: 7,
      mission_id: ['ABC'],
      launch_year: '2020',
      launch_success: true,
      rocket: {
          first_stage: {
              cores: [{
                  land_success: true
              }]
          }
      },
      links: {
          mission_patch: 'image.png',
          mission_patch_small: 'small-image.png'
      }
    }];
    component.spaceData=spacedata;
    component.viewdata=[];
    for(let i=0;i<spacedata.length;i++){
      component.singleViewdata=new SpaceDataModel(spacedata[i]);
      component.viewdata.push(component.singleViewdata);
    }
    expect(component.viewdata).toBeDefined();
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
  const subscription = spyOn(component.observableSubscription, 'unsubscribe').and.callThrough();
  component.ngOnDestroy();
  expect(subscription).toHaveBeenCalled();
});
it('Init method', () => {
  const spacedata :ISpaceDataModel[]= [{
    mission_name: 'ABC',
    flight_number: 7,
    mission_id: ['ABC'],
    launch_year: '2020',
    launch_success: true,
    rocket: {
        first_stage: {
            cores: [{
                land_success: true
            }]
        }
    },
    links: {
        mission_patch: 'image.png',
        mission_patch_small: 'small-image.png'
    }
  }];
  component.spaceData=spacedata;
  component.viewdata=[];
  const spaceDataServiceStub: SpaceDataService = fixture.debugElement.injector.get(
    SpaceDataService
  );
  spyOn(spaceDataServiceStub,'getAllData').and.returnValue(of(spacedata));
  component.ngOnInit();
  spaceDataServiceStub.getAllData({}).subscribe(res => {
    component.spaceData=res;
    component.viewdata=[];
        for (let i = 0; i < component.spaceData.length; i++) {
          component.singleViewdata = new SpaceDataModel(component.spaceData[i]);
          component.viewdata.push(component.singleViewdata);
        }
});
expect(component.spaceData).toEqual(spacedata);
});
});
