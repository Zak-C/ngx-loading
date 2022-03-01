import { TestBed } from '@angular/core/testing';
import {
  ngxLoadingAnimationTypes,
  NgxLoadingConfig,
} from './ngx-loading-config';
import { NgxLoadingService } from './ngx-loading.service';

describe('NgxLoadingService', () => {
  let service: NgxLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use a default NgxLoadingConfig', () => {
    const ngxLoadingConfig = new NgxLoadingConfig();
    expect(service.loadingConfig).toEqual(ngxLoadingConfig);
  });

  it('should use a custom NgxLoadingConfig when initialised with one', () => {
    const ngxLoadingConfig = new NgxLoadingConfig();
    ngxLoadingConfig.animationType = ngxLoadingAnimationTypes.cubeGrid;
    ngxLoadingConfig.backdropBackgroundColour = '#ffffff';
    ngxLoadingConfig.backdropBorderRadius = '1px';
    ngxLoadingConfig.fullScreenBackdrop = true;
    ngxLoadingConfig.primaryColour = '#00ffff';
    ngxLoadingConfig.secondaryColour = '#ff00ff';
    ngxLoadingConfig.tertiaryColour = '#ffff00';
    service = new NgxLoadingService(ngxLoadingConfig);
    expect(service.loadingConfig).toEqual(ngxLoadingConfig);
  });
});
