import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { of } from 'rxjs';
import { SpaceDataService } from 'src/app/services/space-data.service';
import { asapScheduler, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('SpaceDataService', async () => {
    let service: SpaceDataService;
    let httpMock: HttpTestingController;
    let httpService:HttpTestingController;
    //let hTTp:HttpClient
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SpaceDataService]
        }).compileComponents();
        service = TestBed.inject(SpaceDataService);
        httpMock = TestBed.get(HttpTestingController);
        httpService = TestBed.inject(HttpTestingController);
    });
    it('Space Date Service should be created', () => {
        expect(service).toBeTruthy();
    });
    it('Space Get All Data Test', async() => {
        const spaceData = [{
            mission_name: 'Falcon123',
            flight_number: 7,
            mission_id: ['007'],
            launch_year: '2020',
            launch_success: true,
            rocket: {
                first_stage: {
                    cores: [
                        { landing_success: false }
                    ]
                }
            },
            links: {
                mission_patch: 'img.png',
                mission_patch_small: 'img_small.png'
            }
        }];
        let response;
        
        spyOn(service, 'getAllData').and.returnValue(of(spaceData));

        service.getAllData({}).subscribe(res => {
            response = res;
        });
        expect(response).toEqual(spaceData);
    });
    describe('getAllData', () => {
        it('makes expected calls', () => {
          const httpTestingController = TestBed.inject(HttpTestingController);
          const paramsStub: Params = <any>{};
          service.getAllData(paramsStub).subscribe(res => {
            expect(res).toEqual(paramsStub);
          });
          const req = httpTestingController.expectOne(
            'https://api.spaceXdata.com/v3/launches'
          );
          expect(req.request.method).toEqual('GET');
          req.flush(paramsStub);
          httpTestingController.verify();
        });
      });
});
