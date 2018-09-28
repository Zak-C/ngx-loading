import { inject, TestBed } from '@angular/core/testing';
import { NgxLoadingService } from './ngx-loading.service';

describe('LoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLoadingService]
    });
  });

  it('should be created', inject([NgxLoadingService], (service: NgxLoadingService) => {
    expect(service).toBeTruthy();
  }));
});
