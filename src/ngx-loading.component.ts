import { Component, OnInit, Input } from '@angular/core';

import { ILoadingConfig } from './ngx-loading.config';

export const ANIMATION_TYPE = {
    threeBounce: 'three-bounce',
    rotatingPlane: 'rotating-plane',
    rectangleBounce: 'rectangle-bounce',
    wanderingCubes: 'wandering-cubes'
}

@Component({
    selector: 'ngx-loading',
    template: `
        <div *ngIf="show" class="backdrop" [ngStyle]="{'border-radius': loadingConfig?.backdropBorderRadius, 'background-color': loadingConfig?.backdropBackgroundColour}"></div>
        <div *ngIf="show">
            <div *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPE.threeBounce" class="spinner-three-bounce">
                <div class="bounce1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="bounce2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
                <div class="bounce3" [ngStyle]="{'background-color': loadingConfig?.tertiaryColour}"></div>
            </div>

            <div class="spinner-sk-rotateplane" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPE.rotatingPlane" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>

            <div class="spinner-rectangle-bounce" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPE.rectangleBounce">
                <div class="rect1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect2" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect3" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect4" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="rect5" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
            </div>

            <div class="spinner-wandering-cubes" *ngIf="getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPE.wanderingCubes">
                <div class="cube1" [ngStyle]="{'background-color': loadingConfig?.primaryColour}"></div>
                <div class="cube2" [ngStyle]="{'background-color': loadingConfig?.secondaryColour}"></div>
            </div>
        </div>
    `,
    styles: [
        `
            /* Three Bounce styles */

            .backdrop {
                z-index: 50;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.3);
            }

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
        `
    ]
})
export class LoadingComponent implements OnInit {
    @Input() show: boolean;
    @Input() loadingConfig: ILoadingConfig;

    public ANIMATION_TYPE = ANIMATION_TYPE;
    constructor() { }

    ngOnInit() { }

    public getAnimationType(animationType: string): string {
        let animationTypeSet: string;
        switch (animationType) {
            case ANIMATION_TYPE.threeBounce:
                animationTypeSet = ANIMATION_TYPE.threeBounce;
                break;
            case ANIMATION_TYPE.rectangleBounce:
                animationTypeSet = ANIMATION_TYPE.rectangleBounce;
                break;
            case ANIMATION_TYPE.rotatingPlane:
                animationTypeSet = ANIMATION_TYPE.rotatingPlane;
                break;
            case ANIMATION_TYPE.wanderingCubes:
                animationTypeSet = ANIMATION_TYPE.wanderingCubes;
                break;
            default:
                animationTypeSet = ANIMATION_TYPE.threeBounce;
        }
        return animationTypeSet;
    }
}