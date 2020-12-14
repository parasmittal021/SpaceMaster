import { TestBed } from '@angular/core/testing';
import { LaunchResolverService } from './launch-resolver.service';

describe('LaunchResolverService', () => {
  let service: LaunchResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LaunchResolverService] });
    service = TestBed.inject(LaunchResolverService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('resolve method',() => {
service.resolve().subscribe(response=>{
  expect(response).toEqual(true);
})
  })
});
