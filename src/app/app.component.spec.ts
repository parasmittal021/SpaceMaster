import { componentFactoryName } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let router:Router;
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
     app=fixture.componentInstance;
     router=TestBed.inject(Router);
  });
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SpaceMaster'`, () => { 
    expect(app.title).toEqual('SpaceMaster');
  });
  it('ngOnInit', () => { 
    const spy = spyOn(router, 'navigate');
    app.ngOnInit();
    expect(spy.calls.mostRecent().args[1].queryParams.limit).toEqual(100);
  });
});
