import { Component, OnInit, Input } from '@angular/core';

import { LoadingConfigService } from './ngx-loading.service';
import { ILoadingConfig, LoadingConfig, ANIMATION_TYPES } from './ngx-loading.config';

@Component({
    selector: 'ngx-loading',
    template: `
        <div *ngIf="show" class="backdrop" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}" [ngStyle]="{'border-radius': loadingConfig?.backdropBorderRadius, 'background-color': loadingConfig?.backdropBackgroundColour}"></div>
        <div *ngIf="show">
            <div *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.threeBounce" class="spinner-three-bounce" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
                <div class="bounce1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="bounce2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
                <div class="bounce3" [ngStyle]="{'background-color': loadingConfig?.tertiaryColour}"></div>
            </div>

            <div class="spinner-sk-rotateplane" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rotatingPlane" [ngStyle]="{'background-color': loadingConfig?.primaryColour}" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}"></div>

            <div class="spinner-rectangle-bounce" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rectangleBounce" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
                <div class="rect1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect2" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect3" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect4" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect5" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
            </div>

            <div class="spinner-wandering-cubes" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.wanderingCubes" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
                <div class="cube1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="cube2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
            </div>

            <div class="sk-fading-circle" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.fadingCircle" [ngClass]="{'full-screen' : loadingConfig?.fullScreenBackdrop == true}">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>

        </div>
    `,
    styles: [
        `       
            .backdrop {
                z-index: 50;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.3);
            }

            /* Three Bounce styles */

            .spinner-three-bounce {
                width: 70px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: 20px;
                margin: auto;
                z-index: 51;
            }

            .spinner-three-bounce > div {
                width: 18px;
                height: 18px;
                background-color: #ffffff;

                border-radius: 100%;
                display: inline-block;
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .spinner-three-bounce .bounce1 {
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }

            .spinner-three-bounce .bounce2 {
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }

            @-webkit-keyframes sk-bouncedelay {
                0%, 80%, 100% { -webkit-transform: scale(0) }
                40% { -webkit-transform: scale(1.0) }
            }

            @keyframes sk-bouncedelay {
                0%, 80%, 100% { 
                    -webkit-transform: scale(0);
                    transform: scale(0);
                } 40% { 
                    -webkit-transform: scale(1.0);
                    transform: scale(1.0);
                }
            }



            /* Rotate Plane styles */

            .spinner-sk-rotateplane {
                width: 40px;
                height: 40px;
                background-color: #ffffff;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 51;
                -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
                animation: sk-rotateplane 1.2s infinite ease-in-out;
            }

            @-webkit-keyframes sk-rotateplane {
                0% { -webkit-transform: perspective(120px) }
                50% { -webkit-transform: perspective(120px) rotateY(180deg) }
                100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
            }

            @keyframes sk-rotateplane {
                0% { 
                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
                } 50% { 
                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
                    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
                } 100% { 
                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                }
            }



            /* Rectangle Bounce styles*/

            .spinner-rectangle-bounce {
                width: 50px;
                height: 40px;
                font-size: 10px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 51;
            }

            .spinner-rectangle-bounce > div {
                background-color: #ffffff;
                height: 100%;
                width: 6px;
                display: inline-block;
                
                -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
                animation: sk-stretchdelay 1.2s infinite ease-in-out;
            }

            .spinner-rectangle-bounce .rect2 {
                -webkit-animation-delay: -1.1s;
                animation-delay: -1.1s;
            }

            .spinner-rectangle-bounce .rect3 {
                -webkit-animation-delay: -1.0s;
                animation-delay: -1.0s;
            }

            .spinner-rectangle-bounce .rect4 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }

            .spinner-rectangle-bounce .rect5 {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
            }

            @-webkit-keyframes sk-stretchdelay {
                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
                20% { -webkit-transform: scaleY(1.0) }
            }

            @keyframes sk-stretchdelay {
                0%, 40%, 100% { 
                    transform: scaleY(0.4);
                    -webkit-transform: scaleY(0.4);
                }  20% { 
                    transform: scaleY(1.0);
                    -webkit-transform: scaleY(1.0);
                }
            }



            /* Wandering Cubes styles */

            .spinner-wandering-cubes {
                width: 60px;
                height: 58px;
                font-size: 10px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 51;
            }

            .cube1, .cube2 {
                background-color: #ffffff;
                width: 15px;
                height: 15px;
                position: absolute;
                top: 0;
                left: 0;
                
                -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
                animation: sk-cubemove 1.8s infinite ease-in-out;
            }

            .cube2 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }

            @-webkit-keyframes sk-cubemove {
                25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
                50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
                75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
                100% { -webkit-transform: rotate(-360deg) }
            }

            @keyframes sk-cubemove {
                25% { 
                    transform: translateX(42px) rotate(-90deg) scale(0.5);
                    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
                } 50% { 
                    transform: translateX(42px) translateY(42px) rotate(-179deg);
                    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
                } 50.1% { 
                    transform: translateX(42px) translateY(42px) rotate(-180deg);
                    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
                } 75% { 
                    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
                    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
                } 100% { 
                    transform: rotate(-360deg);
                    -webkit-transform: rotate(-360deg);
                }
            }  

            /* Fading Circle styles */

            .sk-fading-circle {
                width: 80px;
                height: 80px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 51;
              }
        
              .sk-fading-circle .sk-circle {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
              }
        
              .sk-fading-circle .sk-circle:before {
                content: '';
                display: block;
                margin: 0 auto;
                width: 15%;
                height: 15%;
                background-color: #000;
                border-radius: 100%;
                -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
                animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
              }
        
              .sk-fading-circle .sk-circle2 {
                -webkit-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                transform: rotate(30deg);
              }
        
              .sk-fading-circle .sk-circle3 {
                -webkit-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                transform: rotate(60deg);
              }
        
              .sk-fading-circle .sk-circle4 {
                -webkit-transform: rotate(90deg);
                -ms-transform: rotate(90deg);
                transform: rotate(90deg);
              }
        
              .sk-fading-circle .sk-circle5 {
                -webkit-transform: rotate(120deg);
                -ms-transform: rotate(120deg);
                transform: rotate(120deg);
              }
        
              .sk-fading-circle .sk-circle6 {
                -webkit-transform: rotate(150deg);
                -ms-transform: rotate(150deg);
                transform: rotate(150deg);
              }
        
              .sk-fading-circle .sk-circle7 {
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
              }
        
              .sk-fading-circle .sk-circle8 {
                -webkit-transform: rotate(210deg);
                -ms-transform: rotate(210deg);
                transform: rotate(210deg);
              }
        
              .sk-fading-circle .sk-circle9 {
                -webkit-transform: rotate(240deg);
                -ms-transform: rotate(240deg);
                transform: rotate(240deg);
              }
        
              .sk-fading-circle .sk-circle10 {
                -webkit-transform: rotate(270deg);
                -ms-transform: rotate(270deg);
                transform: rotate(270deg);
              }
        
              .sk-fading-circle .sk-circle11 {
                -webkit-transform: rotate(300deg);
                -ms-transform: rotate(300deg);
                transform: rotate(300deg);
              }
        
              .sk-fading-circle .sk-circle12 {
                -webkit-transform: rotate(330deg);
                -ms-transform: rotate(330deg);
                transform: rotate(330deg);
              }
        
              .sk-fading-circle .sk-circle2:before {
                -webkit-animation-delay: -1.1s;
                animation-delay: -1.1s;
              }
        
              .sk-fading-circle .sk-circle3:before {
                -webkit-animation-delay: -1s;
                animation-delay: -1s;
              }
        
              .sk-fading-circle .sk-circle4:before {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
              }
        
              .sk-fading-circle .sk-circle5:before {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
              }
        
              .sk-fading-circle .sk-circle6:before {
                -webkit-animation-delay: -0.7s;
                animation-delay: -0.7s;
              }
        
              .sk-fading-circle .sk-circle7:before {
                -webkit-animation-delay: -0.6s;
                animation-delay: -0.6s;
              }
        
              .sk-fading-circle .sk-circle8:before {
                -webkit-animation-delay: -0.5s;
                animation-delay: -0.5s;
              }
        
              .sk-fading-circle .sk-circle9:before {
                -webkit-animation-delay: -0.4s;
                animation-delay: -0.4s;
              }
        
              .sk-fading-circle .sk-circle10:before {
                -webkit-animation-delay: -0.3s;
                animation-delay: -0.3s;
              }
        
              .sk-fading-circle .sk-circle11:before {
                -webkit-animation-delay: -0.2s;
                animation-delay: -0.2s;
              }
        
              .sk-fading-circle .sk-circle12:before {
                -webkit-animation-delay: -0.1s;
                animation-delay: -0.1s;
              }
        
              @-webkit-keyframes sk-circleFadeDelay {
                0%,
                39%,
                100% {
                  opacity: 0;
                }
                40% {
                  opacity: 1;
                }
              }
        
              @keyframes sk-circleFadeDelay {
                0%,
                39%,
                100% {
                  opacity: 0;
                }
                40% {
                  opacity: 1;
                }
              }
            
            .full-screen {
                position: fixed;
            }
            
        `
    ]
})
export class LoadingComponent implements OnInit {
    @Input() show: boolean;
    @Input() config: ILoadingConfig = new LoadingConfig();

    public ANIMATION_TYPES = ANIMATION_TYPES;

    public loadingConfig: ILoadingConfig = {
        animationType: '',
        backdropBackgroundColour: '',
        backdropBorderRadius: '',
        fullScreenBackdrop: false,
        primaryColour: '',
        secondaryColour: '',
        tertiaryColour: ''
    };

    private defaultConfig: ILoadingConfig = {
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
        backdropBorderRadius: '0px',
        fullScreenBackdrop: false,
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
    }

    constructor(private loadingConfigService: LoadingConfigService) { }

    ngOnInit() {
        for (let option in this.defaultConfig) {
            if (typeof this.loadingConfig[option] == "boolean") {
                this.loadingConfig[option] = this.config[option] != null ? this.config[option] : false;

                if (this.loadingConfig[option] == false) {
                    this.loadingConfig[option] = this.loadingConfigService.loadingConfig[option] != null ? this.loadingConfigService.loadingConfig[option] : this.defaultConfig[option];
                }
            } else {
                this.loadingConfig[option] = this.config[option] != null ? this.config[option] : '';

                if (this.loadingConfig[option] == '') {
                    this.loadingConfig[option] = this.loadingConfigService.loadingConfig[option] != null ? this.loadingConfigService.loadingConfig[option] : this.defaultConfig[option];
                }
            }
        };
    }

    public getAnimationType(animationType: string): string {
        let animationTypeSet: string;
        switch (animationType) {
            case ANIMATION_TYPES.threeBounce:
                animationTypeSet = ANIMATION_TYPES.threeBounce;
                break;
            case ANIMATION_TYPES.rectangleBounce:
                animationTypeSet = ANIMATION_TYPES.rectangleBounce;
                break;
            case ANIMATION_TYPES.rotatingPlane:
                animationTypeSet = ANIMATION_TYPES.rotatingPlane;
                break;
            case ANIMATION_TYPES.wanderingCubes:
                animationTypeSet = ANIMATION_TYPES.wanderingCubes;
                break;
            case ANIMATION_TYPES.fadingCircle:
                animationTypeSet = ANIMATION_TYPES.fadingCircle;
                break;
            default:
                animationTypeSet = ANIMATION_TYPES.threeBounce;
        }
        return animationTypeSet;
    }
}