import type { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ngxLoadingAnimationTypes,
  NgxLoadingConfig,
} from './ngx-loading-config';
import { NgxLoadingComponent } from './ngx-loading.component';

describe('NgxLoadingComponent', () => {
  let component: NgxLoadingComponent;
  let fixture: ComponentFixture<NgxLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingComponent);
    component = fixture.componentInstance;
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
});
