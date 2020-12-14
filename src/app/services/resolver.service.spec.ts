import { TestBed } from '@angular/core/testing';
import { ResolverService } from './resolver.service';

describe('LaunchResolverService', () => {
  let service: ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ResolverService] });
    service = TestBed.inject(ResolverService);
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
