import { Component, Inject, Injectable, Input, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

class LoadingConfig {
    /**
     * @param {?=} config
     */
    constructor(config = {}) {
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
}
const ANIMATION_TYPES = {
    chasingDots: 'chasing-dots',
    circle: 'sk-circle',
    circleSwish: 'circleSwish',
    cubeGrid: 'sk-cube-grid',
    doubleBounce: 'double-bounce',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rotatingPlane: 'rotating-plane',
    threeBounce: 'three-bounce',
    wanderingCubes: 'wandering-cubes'
};

class LoadingConfigService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.loadingConfig = config || new LoadingConfig();
    }
}
LoadingConfigService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
LoadingConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['loadingConfig',] },] },
];

class LoadingComponent {
    /**
     * @param {?} loadingConfigService
     */
    constructor(loadingConfigService) {
        this.loadingConfigService = loadingConfigService;
        this.config = new LoadingConfig();
        this.ANIMATION_TYPES = ANIMATION_TYPES;
        this.loadingConfig = {
            animationType: "",
            backdropBackgroundColour: "",
            backdropBorderRadius: "",
            fullScreenBackdrop: false,
            primaryColour: "",
            secondaryColour: "",
            tertiaryColour: ""
        };
        this.defaultConfig = {
            animationType: ANIMATION_TYPES.threeBounce,
            backdropBackgroundColour: "rgba(0, 0, 0, 0.3)",
            backdropBorderRadius: "0px",
            fullScreenBackdrop: false,
            primaryColour: "#ffffff",
            secondaryColour: "#ffffff",
            tertiaryColour: "#ffffff"
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        for (let /** @type {?} */ option in this.defaultConfig) {
            if (typeof this.loadingConfig[option] == "boolean") {
                if (this.config[option] != null) {
                    this.loadingConfig[option] = this.config[option];
                    continue;
                }
                this.loadingConfig[option] =
                    this.loadingConfigService.loadingConfig[option] != null
                        ? this.loadingConfigService.loadingConfig[option]
                        : this.defaultConfig[option];
            }
            else {
                if (this.config[option] != null) {
                    this.loadingConfig[option] = this.config[option];
                    continue;
                }
                this.loadingConfig[option] =
                    this.loadingConfigService.loadingConfig[option] != null
                        ? this.loadingConfigService.loadingConfig[option]
                        : this.defaultConfig[option];
            }
        }
    }
    /**
     * @param {?} animationType
     * @return {?}
     */
    getAnimationType(animationType) {
        let /** @type {?} */ animationTypeSet;
        switch (animationType) {
            case ANIMATION_TYPES.chasingDots:
                animationTypeSet = ANIMATION_TYPES.chasingDots;
                break;
            case ANIMATION_TYPES.circle:
                animationTypeSet = ANIMATION_TYPES.circle;
                break;
            case ANIMATION_TYPES.circleSwish:
                animationTypeSet = ANIMATION_TYPES.circleSwish;
                break;
            case ANIMATION_TYPES.cubeGrid:
                animationTypeSet = ANIMATION_TYPES.cubeGrid;
                break;
            case ANIMATION_TYPES.doubleBounce:
                animationTypeSet = ANIMATION_TYPES.doubleBounce;
                break;
            case ANIMATION_TYPES.pulse:
                animationTypeSet = ANIMATION_TYPES.pulse;
                break;
            case ANIMATION_TYPES.rectangleBounce:
                animationTypeSet = ANIMATION_TYPES.rectangleBounce;
                break;
            case ANIMATION_TYPES.rotatingPlane:
                animationTypeSet = ANIMATION_TYPES.rotatingPlane;
                break;
            case ANIMATION_TYPES.threeBounce:
                animationTypeSet = ANIMATION_TYPES.threeBounce;
                break;
            case ANIMATION_TYPES.wanderingCubes:
                animationTypeSet = ANIMATION_TYPES.wanderingCubes;
                break;
            default:
                animationTypeSet = ANIMATION_TYPES.threeBounce;
        }
        return animationTypeSet;
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: "ngx-loading",
                template: `
    <div *ngIf="show" class="backdrop" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}" [ngStyle]="{'border-radius': loadingConfig?.backdropBorderRadius, 'background-color': loadingConfig?.backdropBackgroundColour}"></div>
    <div *ngIf="show">
      <div class="spinner-circle" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.circle" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}"
        [ngStyle]="{'border-top-color': loadingConfig?.secondaryColour, 'border-right-color': loadingConfig?.secondaryColour, 'border-bottom-color': loadingConfig?.secondaryColour, 'border-left-color': loadingConfig?.primaryColour}"></div>

      <div *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.cubeGrid" class="sk-cube-grid" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
        <div class="sk-cube sk-cube1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube2" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube3" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube4" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube5" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube6" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube7" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube8" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="sk-cube sk-cube9" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
      </div>

      <div *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.threeBounce" class="spinner-three-bounce"
        [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
        <div class="bounce1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="bounce2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
        <div class="bounce3" [ngStyle]="{'background-color': loadingConfig?.tertiaryColour}"></div>
      </div>

      <div class="spinner-sk-rotateplane" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rotatingPlane"
        [ngStyle]="{'background-color': loadingConfig?.primaryColour}" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}"></div>

      <div class="spinner-rectangle-bounce" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rectangleBounce"
        [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
        <div class="rect1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="rect2" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="rect3" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="rect4" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="rect5" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
      </div>

      <div class="spinner-wandering-cubes" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.wanderingCubes"
        [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
        <div class="cube1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="cube2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
      </div>

      <div class="spinner-double-bounce" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.doubleBounce"
        [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
        <div class="double-bounce1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="double-bounce2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
      </div>

      <div class="spinner-pulse" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.pulse" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}"
        [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>

      <div class="spinner-chasing-dots" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.chasingDots"
        [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
        <div class="dot1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
        <div class="dot2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
      </div>

      <div class="spinner-circle-swish" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.circleSwish"
        [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}" [ngStyle]="{'color': loadingConfig?.primaryColour}"></div>

    </div>
  `
            },] },
];
/**
 * @nocollapse
 */
LoadingComponent.ctorParameters = () => [
    { type: LoadingConfigService, },
];
LoadingComponent.propDecorators = {
    'show': [{ type: Input },],
    'config': [{ type: Input },],
};

class LoadingModule {
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    static forRoot(loadingConfig) {
        return {
            ngModule: LoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    }
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [LoadingComponent],
                declarations: [LoadingComponent],
                providers: [LoadingConfigService],
            },] },
];
/**
 * @nocollapse
 */
LoadingModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingModule, ANIMATION_TYPES, LoadingComponent as ɵb, LoadingConfigService as ɵc };
//# sourceMappingURL=ngx-loading.js.map
