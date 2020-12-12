import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { LaunchResolverService } from './launch-resolver.service';
import { SpaceDataService } from './space-data.service';

describe('LaunchResolverService', () => {
    let service: LaunchResolverService;
    let spaceDataService: SpaceDataService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LaunchResolverService]
        }).compileComponents();
        service = TestBed.inject(LaunchResolverService);
        spaceDataService = TestBed.inject(SpaceDataService);
    });
    it(' Resolver Service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Resolver Test', () => {
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
        spyOn(service, 'resolve').and.returnValue(of(spaceData));
        service.resolve(new ActivatedRouteSnapshot()).subscribe(res => {
            response = res;
        });
        expect(response).toEqual(spaceData);
    });
    it('Resolver Test for service call', () => {
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
        spyOn(spaceDataService, 'getAllData').and.returnValue(of(spaceData));
        service.resolve(new ActivatedRouteSnapshot()).subscribe(res => {
            response = res;
        });
        expect(response).toEqual(spaceData);
    });
});
