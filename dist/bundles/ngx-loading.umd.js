(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-loading'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var LoadingConfig = /** @class */ (function () {
    /**
     * @param {?=} config
     */
    function LoadingConfig(config) {
        if (config === void 0) { config = {}; }
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
    return LoadingConfig;
}());
var ANIMATION_TYPES = {
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
var LoadingConfigService = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function LoadingConfigService(config) {
        this.config = config;
        this.loadingConfig = config || new LoadingConfig();
    }
    return LoadingConfigService;
}());
LoadingConfigService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
LoadingConfigService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: ['loadingConfig',] },] },
]; };
var LoadingComponent = /** @class */ (function () {
    /**
     * @param {?} loadingConfigService
     */
    function LoadingComponent(loadingConfigService) {
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
    LoadingComponent.prototype.ngOnInit = function () {
        for (var /** @type {?} */ option in this.defaultConfig) {
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
    };
    /**
     * @param {?} animationType
     * @return {?}
     */
    LoadingComponent.prototype.getAnimationType = function (animationType) {
        var /** @type {?} */ animationTypeSet;
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
    };
    return LoadingComponent;
}());
LoadingComponent.decorators = [
    { type: core.Component, args: [{
                selector: "ngx-loading",
                template: "\n    <div *ngIf=\"show\" class=\"backdrop\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': loadingConfig?.backdropBorderRadius, 'background-color': loadingConfig?.backdropBackgroundColour}\"></div>\n    <div *ngIf=\"show\">\n      <div class=\"spinner-circle\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.circle\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\"\n        [ngStyle]=\"{'border-top-color': loadingConfig?.secondaryColour, 'border-right-color': loadingConfig?.secondaryColour, 'border-bottom-color': loadingConfig?.secondaryColour, 'border-left-color': loadingConfig?.primaryColour}\"></div>\n\n      <div *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n        <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n      </div>\n\n      <div *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.threeBounce\" class=\"spinner-three-bounce\"\n        [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n        <div class=\"bounce1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"bounce2\" [ngStyle]=\"{'background-color': loadingConfig?.secondaryColour}\"></div>\n        <div class=\"bounce3\" [ngStyle]=\"{'background-color': loadingConfig?.tertiaryColour}\"></div>\n      </div>\n\n      <div class=\"spinner-sk-rotateplane\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rotatingPlane\"\n        [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\"></div>\n\n      <div class=\"spinner-rectangle-bounce\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rectangleBounce\"\n        [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n        <div class=\"rect1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"rect2\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"rect3\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"rect4\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"rect5\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n      </div>\n\n      <div class=\"spinner-wandering-cubes\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.wanderingCubes\"\n        [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n        <div class=\"cube1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"cube2\" [ngStyle]=\"{'background-color': loadingConfig?.secondaryColour}\"></div>\n      </div>\n\n      <div class=\"spinner-double-bounce\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.doubleBounce\"\n        [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n        <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': loadingConfig?.secondaryColour}\"></div>\n      </div>\n\n      <div class=\"spinner-pulse\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.pulse\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\"\n        [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n\n      <div class=\"spinner-chasing-dots\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.chasingDots\"\n        [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n        <div class=\"dot1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n        <div class=\"dot2\" [ngStyle]=\"{'background-color': loadingConfig?.secondaryColour}\"></div>\n      </div>\n\n      <div class=\"spinner-circle-swish\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.circleSwish\"\n        [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': loadingConfig?.primaryColour}\"></div>\n\n    </div>\n  "
            },] },
];
/**
 * @nocollapse
 */
LoadingComponent.ctorParameters = function () { return [
    { type: LoadingConfigService, },
]; };
LoadingComponent.propDecorators = {
    'show': [{ type: core.Input },],
    'config': [{ type: core.Input },],
};
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    LoadingModule.forRoot = function (loadingConfig) {
        return {
            ngModule: LoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    };
    return LoadingModule;
}());
LoadingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                exports: [LoadingComponent],
                declarations: [LoadingComponent],
                providers: [LoadingConfigService],
            },] },
];
/**
 * @nocollapse
 */
LoadingModule.ctorParameters = function () { return []; };

exports.LoadingModule = LoadingModule;
exports.ANIMATION_TYPES = ANIMATION_TYPES;
exports.ɵb = LoadingComponent;
exports.ɵc = LoadingConfigService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-loading.umd.js.map
