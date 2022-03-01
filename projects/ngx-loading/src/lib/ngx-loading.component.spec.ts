import type { DebugElement } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ngxLoadingAnimationTypes,
  NgxLoadingConfig,
} from './ngx-loading-config';
import { NgxLoadingComponent } from './ngx-loading.component';
import { NgxLoadingService } from './ngx-loading.service';

let ngxLoadingServiceStub: Partial<NgxLoadingService>;

describe('NgxLoadingComponent', () => {
  let component: NgxLoadingComponent;
  let fixture: ComponentFixture<NgxLoadingComponent>;

  beforeEach(async () => {
    // stub NgxLoadingService for test purposes
    ngxLoadingServiceStub = {
      loadingConfig: new NgxLoadingConfig(),
    };

    await TestBed.configureTestingModule({
      declarations: [NgxLoadingComponent],
      providers: [
        { provide: NgxLoadingService, useValue: ngxLoadingServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    expect(component.show).toBe(false);
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.backdrop'))).toBeFalsy();
  });

  it('should show loading screen when show is set to true', () => {
    component.show = true;
    expect(component.show).toBe(true);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.backdrop'))).toBeTruthy();
  });

  it('should show the three bounce animation by default once show set to true', () => {
    component.show = true;
    expect(component.show).toBe(true);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.spinner-three-bounce'))).toBeTruthy();
  });

  it('should show the correct animation when set once show set to true', () => {
    [
      {
        animation: ngxLoadingAnimationTypes.threeBounce,
        expectedClass: '.spinner-three-bounce',
      },
      {
        animation: ngxLoadingAnimationTypes.chasingDots,
        expectedClass: '.spinner-chasing-dots',
      },
      {
        animation: ngxLoadingAnimationTypes.circle,
        expectedClass: '.spinner-circle',
      },
      {
        animation: ngxLoadingAnimationTypes.circleSwish,
        expectedClass: '.spinner-circle-swish',
      },
      {
        animation: ngxLoadingAnimationTypes.cubeGrid,
        expectedClass: '.sk-cube-grid',
      },
      {
        animation: ngxLoadingAnimationTypes.doubleBounce,
        expectedClass: '.spinner-double-bounce',
      },
      {
        animation: ngxLoadingAnimationTypes.none,
        expectedClass: '.backdrop',
      },
      {
        animation: ngxLoadingAnimationTypes.pulse,
        expectedClass: '.spinner-pulse',
      },
      {
        animation: ngxLoadingAnimationTypes.rectangleBounce,
        expectedClass: '.spinner-rectangle-bounce',
      },
      {
        animation: ngxLoadingAnimationTypes.rotatingPlane,
        expectedClass: '.spinner-sk-rotateplane',
      },
      {
        animation: ngxLoadingAnimationTypes.wanderingCubes,
        expectedClass: '.spinner-wandering-cubes',
      },
    ].forEach(({ animation, expectedClass }) => {
      const config = new NgxLoadingConfig();
      config.animationType = animation;
      component.config = config;
      component.show = true;
      expect(component.show).toBe(true);
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement;
      expect(debugElement.query(By.css(expectedClass))).toBeTruthy();
    });
  });

  it('should show the correct animation when set at the service level and show set to true', () => {
    [
      {
        animation: ngxLoadingAnimationTypes.threeBounce,
        expectedClass: '.spinner-three-bounce',
      },
      {
        animation: ngxLoadingAnimationTypes.chasingDots,
        expectedClass: '.spinner-chasing-dots',
      },
      {
        animation: ngxLoadingAnimationTypes.circle,
        expectedClass: '.spinner-circle',
      },
      {
        animation: ngxLoadingAnimationTypes.circleSwish,
        expectedClass: '.spinner-circle-swish',
      },
      {
        animation: ngxLoadingAnimationTypes.cubeGrid,
        expectedClass: '.sk-cube-grid',
      },
      {
        animation: ngxLoadingAnimationTypes.doubleBounce,
        expectedClass: '.spinner-double-bounce',
      },
      {
        animation: ngxLoadingAnimationTypes.none,
        expectedClass: '.backdrop',
      },
      {
        animation: ngxLoadingAnimationTypes.pulse,
        expectedClass: '.spinner-pulse',
      },
      {
        animation: ngxLoadingAnimationTypes.rectangleBounce,
        expectedClass: '.spinner-rectangle-bounce',
      },
      {
        animation: ngxLoadingAnimationTypes.rotatingPlane,
        expectedClass: '.spinner-sk-rotateplane',
      },
      {
        animation: ngxLoadingAnimationTypes.wanderingCubes,
        expectedClass: '.spinner-wandering-cubes',
      },
    ].forEach(({ animation, expectedClass }) => {
      const ngxLoadingService = TestBed.inject(NgxLoadingService);
      const ngxLoadingConfig = new NgxLoadingConfig();
      ngxLoadingConfig.animationType = animation;
      ngxLoadingConfig.backdropBackgroundColour = '#ffffff';
      ngxLoadingConfig.backdropBorderRadius = '1px';
      ngxLoadingConfig.fullScreenBackdrop = true;
      ngxLoadingConfig.primaryColour = '#00ffff';
      ngxLoadingConfig.secondaryColour = '#ff00ff';
      ngxLoadingConfig.tertiaryColour = '#ffff00';

      ngxLoadingService.loadingConfig = ngxLoadingConfig;

      fixture = TestBed.createComponent(NgxLoadingComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();

      component.show = true;
      expect(component.show).toBe(true);
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement;
      expect(component.config.animationType).toEqual(
        ngxLoadingConfig.animationType
      );
      expect(component.config.backdropBackgroundColour).toEqual(
        ngxLoadingConfig.backdropBackgroundColour
      );
      expect(component.config.backdropBorderRadius).toEqual(
        ngxLoadingConfig.backdropBorderRadius
      );
      expect(component.config.fullScreenBackdrop).toEqual(
        ngxLoadingConfig.fullScreenBackdrop
      );
      expect(component.config.primaryColour).toEqual(
        ngxLoadingConfig.primaryColour
      );
      expect(component.config.secondaryColour).toEqual(
        ngxLoadingConfig.secondaryColour
      );
      expect(component.config.tertiaryColour).toEqual(
        ngxLoadingConfig.tertiaryColour
      );
      expect(debugElement.query(By.css(expectedClass))).toBeTruthy();
    });
  });
});
