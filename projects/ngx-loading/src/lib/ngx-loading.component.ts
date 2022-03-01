import { OnInit, TemplateRef } from '@angular/core';
import { Component, Input } from '@angular/core';
import {
  ngxLoadingAnimationTypes,
  NgxLoadingConfig,
} from './ngx-loading-config';
import { INgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingService } from './ngx-loading.service';

@Component({
  selector: 'ngx-loading',
  template: `
    <div *ngIf="show">
      <div
        class="backdrop"
        [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        [ngStyle]="{
          'border-radius': config?.backdropBorderRadius,
          'background-color': config?.backdropBackgroundColour
        }"
      ></div>

      <div [ngSwitch]="config?.animationType">
        <div
          class="spinner-circle"
          *ngSwitchCase="ngxLoadingAnimationTypes.circle"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
          [ngStyle]="{
            'border-top-color': config?.secondaryColour,
            'border-right-color': config?.secondaryColour,
            'border-bottom-color': config?.secondaryColour,
            'border-left-color': config?.primaryColour
          }"
        ></div>

        <div
          *ngSwitchCase="ngxLoadingAnimationTypes.cubeGrid"
          class="sk-cube-grid"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        >
          <div
            class="sk-cube sk-cube1"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube2"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube3"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube4"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube5"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube6"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube7"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube8"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="sk-cube sk-cube9"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
        </div>

        <div
          class="spinner-sk-rotateplane"
          *ngSwitchCase="ngxLoadingAnimationTypes.rotatingPlane"
          [ngStyle]="{ 'background-color': config?.primaryColour }"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        ></div>

        <div
          class="spinner-rectangle-bounce"
          *ngSwitchCase="ngxLoadingAnimationTypes.rectangleBounce"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        >
          <div
            class="rect1"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="rect2"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="rect3"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="rect4"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="rect5"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
        </div>

        <div
          class="spinner-wandering-cubes"
          *ngSwitchCase="ngxLoadingAnimationTypes.wanderingCubes"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        >
          <div
            class="cube1"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="cube2"
            [ngStyle]="{ 'background-color': config?.secondaryColour }"
          ></div>
        </div>

        <div
          class="spinner-double-bounce"
          *ngSwitchCase="ngxLoadingAnimationTypes.doubleBounce"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        >
          <div
            class="double-bounce1"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="double-bounce2"
            [ngStyle]="{ 'background-color': config?.secondaryColour }"
          ></div>
        </div>

        <div
          class="spinner-pulse"
          *ngSwitchCase="ngxLoadingAnimationTypes.pulse"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
          [ngStyle]="{ 'background-color': config?.primaryColour }"
        ></div>

        <div
          class="spinner-chasing-dots"
          *ngSwitchCase="ngxLoadingAnimationTypes.chasingDots"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        >
          <div
            class="dot1"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="dot2"
            [ngStyle]="{ 'background-color': config?.secondaryColour }"
          ></div>
        </div>

        <div
          class="spinner-circle-swish"
          *ngSwitchCase="ngxLoadingAnimationTypes.circleSwish"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
          [ngStyle]="{ color: config?.primaryColour }"
        ></div>

        <div
          *ngSwitchCase="ngxLoadingAnimationTypes.none"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        ></div>

        <div
          *ngSwitchDefault
          class="spinner-three-bounce"
          [ngClass]="{ 'full-screen': config?.fullScreenBackdrop === true }"
        >
          <div
            class="bounce1"
            [ngStyle]="{ 'background-color': config?.primaryColour }"
          ></div>
          <div
            class="bounce2"
            [ngStyle]="{ 'background-color': config?.secondaryColour }"
          ></div>
          <div
            class="bounce3"
            [ngStyle]="{ 'background-color': config?.tertiaryColour }"
          ></div>
        </div>

        <ng-container *ngIf="template">
          <ng-container *ngTemplateOutlet="template"></ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .backdrop {
        z-index: 1999;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }

      /* Spinner Circle styles */
      .spinner-circle,
      .spinner-circle:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
      }

      .spinner-circle {
        font-size: 6px;
        border-top: 1.1em solid rgba(255, 255, 255, 0.2);
        border-right: 1.1em solid rgba(255, 255, 255, 0.2);
        border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
        border-left: 1.1em solid #ffffff;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
      }
      @-webkit-keyframes load8 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes load8 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      /* Circle Swish styles */
      .spinner-circle-swish {
        font-size: 60px;
        overflow: hidden;
        width: 1em;
        height: 1em;
        z-index: 2000;
        border-radius: 50%;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        animation: load6 1.7s infinite ease, round 1.7s infinite ease;
      }
      @-webkit-keyframes load6 {
        0% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
            -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
            -0.297em -0.775em 0 -0.477em;
        }
        20% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
            -0.749em -0.34em 0 -0.477em;
        }
        38% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
            -0.82em -0.09em 0 -0.477em;
        }
        100% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
      }
      @keyframes load6 {
        0% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
            -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
            -0.297em -0.775em 0 -0.477em;
        }
        20% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
            -0.749em -0.34em 0 -0.477em;
        }
        38% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
            -0.82em -0.09em 0 -0.477em;
        }
        100% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
      }
      @-webkit-keyframes round {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes round {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      /* Cube Grid styles */
      .sk-cube-grid {
        width: 40px;
        height: 40px;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
      }

      .sk-cube-grid .sk-cube {
        width: 33%;
        height: 33%;
        background-color: #333;
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
      }

      .sk-cube-grid .sk-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      .sk-cube-grid .sk-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }

      .sk-cube-grid .sk-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
      }

      .sk-cube-grid .sk-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      .sk-cube-grid .sk-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      .sk-cube-grid .sk-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }

      .sk-cube-grid .sk-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }

      .sk-cube-grid .sk-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      .sk-cube-grid .sk-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      @-webkit-keyframes sk-cubeGridScaleDelay {
        0%,
        70%,
        100% {
          -webkit-transform: scale3D(1, 1, 1);
          transform: scale3D(1, 1, 1);
        }
        35% {
          -webkit-transform: scale3D(0, 0, 1);
          transform: scale3D(0, 0, 1);
        }
      }

      @keyframes sk-cubeGridScaleDelay {
        0%,
        70%,
        100% {
          -webkit-transform: scale3D(1, 1, 1);
          transform: scale3D(1, 1, 1);
        }
        35% {
          -webkit-transform: scale3D(0, 0, 1);
          transform: scale3D(0, 0, 1);
        }
      }

      /* Double Bounce styles */
      .spinner-double-bounce {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
      }

      .double-bounce1,
      .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation: sk-bounce 2s infinite ease-in-out;
        animation: sk-bounce 2s infinite ease-in-out;
      }

      .double-bounce2 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }

      @-webkit-keyframes sk-bounce {
        0%,
        100% {
          -webkit-transform: scale(0);
        }
        50% {
          -webkit-transform: scale(1);
        }
      }

      @keyframes sk-bounce {
        0%,
        100% {
          transform: scale(0);
          -webkit-transform: scale(0);
        }
        50% {
          transform: scale(1);
          -webkit-transform: scale(1);
        }
      }

      /* Pulse styles */
      .spinner-pulse {
        width: 40px;
        height: 40px;
        background-color: #333;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
        border-radius: 100%;
        -webkit-animation: sk-scaleout 1s infinite ease-in-out;
        animation: sk-scaleout 1s infinite ease-in-out;
      }

      @-webkit-keyframes sk-scaleout {
        0% {
          -webkit-transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          opacity: 0;
        }
      }

      @keyframes sk-scaleout {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
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
        z-index: 2000;
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
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
        }
      }

      @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
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
        z-index: 2000;
        -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
        animation: sk-rotateplane 1.2s infinite ease-in-out;
      }

      @-webkit-keyframes sk-rotateplane {
        0% {
          -webkit-transform: perspective(120px);
        }
        50% {
          -webkit-transform: perspective(120px) rotateY(180deg);
        }
        100% {
          -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
        }
      }

      @keyframes sk-rotateplane {
        0% {
          transform: perspective(120px) rotateX(0deg) rotateY(0deg);
          -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
          transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
          -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        }
        100% {
          transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          -webkit-transform: perspective(120px) rotateX(-180deg)
            rotateY(-179.9deg);
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
        z-index: 2000;
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
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
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
        0%,
        40%,
        100% {
          -webkit-transform: scaleY(0.4);
        }
        20% {
          -webkit-transform: scaleY(1);
        }
      }

      @keyframes sk-stretchdelay {
        0%,
        40%,
        100% {
          transform: scaleY(0.4);
          -webkit-transform: scaleY(0.4);
        }
        20% {
          transform: scaleY(1);
          -webkit-transform: scaleY(1);
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
        z-index: 2000;
      }

      .cube1,
      .cube2 {
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
        25% {
          -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
        }
        50% {
          -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
        }
        75% {
          -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
            scale(0.5);
        }
        100% {
          -webkit-transform: rotate(-360deg);
        }
      }

      @keyframes sk-cubemove {
        25% {
          transform: translateX(42px) rotate(-90deg) scale(0.5);
          -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
        }
        50% {
          transform: translateX(42px) translateY(42px) rotate(-179deg);
          -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
        }
        50.1% {
          transform: translateX(42px) translateY(42px) rotate(-180deg);
          -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
        }
        75% {
          transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
          -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
            scale(0.5);
        }
        100% {
          transform: rotate(-360deg);
          -webkit-transform: rotate(-360deg);
        }
      }

      /* Circle styles */
      .sk-circle {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
      }
      .sk-circle .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .sk-circle .sk-child:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
      }
      .sk-circle .sk-circle2 {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg);
      }
      .sk-circle .sk-circle3 {
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg);
      }
      .sk-circle .sk-circle4 {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }
      .sk-circle .sk-circle5 {
        -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        transform: rotate(120deg);
      }
      .sk-circle .sk-circle6 {
        -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        transform: rotate(150deg);
      }
      .sk-circle .sk-circle7 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      .sk-circle .sk-circle8 {
        -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
        transform: rotate(210deg);
      }
      .sk-circle .sk-circle9 {
        -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
        transform: rotate(240deg);
      }
      .sk-circle .sk-circle10 {
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
      }
      .sk-circle .sk-circle11 {
        -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
        transform: rotate(300deg);
      }
      .sk-circle .sk-circle12 {
        -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
        transform: rotate(330deg);
      }
      .sk-circle .sk-circle2:before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      .sk-circle .sk-circle3:before {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
      .sk-circle .sk-circle4:before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      .sk-circle .sk-circle5:before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
      .sk-circle .sk-circle6:before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
      }
      .sk-circle .sk-circle7:before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
      }
      .sk-circle .sk-circle8:before {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
      .sk-circle .sk-circle9:before {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
      }
      .sk-circle .sk-circle10:before {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
      }
      .sk-circle .sk-circle11:before {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
      }
      .sk-circle .sk-circle12:before {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
      }

      @-webkit-keyframes sk-circleBounceDelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }

      @keyframes sk-circleBounceDelay {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }

      /* Chasing Dots styles */
      .spinner-chasing-dots {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 2000;
        text-align: center;
        -webkit-animation: sk-rotate 2s infinite linear;
        animation: sk-rotate 2s infinite linear;
      }

      .dot1,
      .dot2 {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-bounce 2s infinite ease-in-out;
        animation: sk-bounce 2s infinite ease-in-out;
      }

      .dot2 {
        top: auto;
        bottom: 0;
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }

      @-webkit-keyframes sk-rotate {
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes sk-rotate {
        100% {
          transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
        }
      }

      @-webkit-keyframes sk-bounce {
        0%,
        100% {
          -webkit-transform: scale(0);
        }
        50% {
          -webkit-transform: scale(1);
        }
      }

      @keyframes sk-bounce {
        0%,
        100% {
          transform: scale(0);
          -webkit-transform: scale(0);
        }
        50% {
          transform: scale(1);
          -webkit-transform: scale(1);
        }
      }

      .full-screen {
        position: fixed;
        position: -ms-page;
      }
    `,
  ],
})
export class NgxLoadingComponent implements OnInit {
  @Input() show = false;
  @Input() config: INgxLoadingConfig = new NgxLoadingConfig();
  @Input()
  template!: TemplateRef<any>;
  private defaultConfig: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
    backdropBorderRadius: '0px',
    fullScreenBackdrop: false,
    primaryColour: '#ffffff',
    secondaryColour: '#ffffff',
    tertiaryColour: '#ffffff',
  };
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(private LoadingService: NgxLoadingService) {}

  ngOnInit() {
    this.setupConfig();
  }

  private setupConfig(): void {
    for (const option in this.defaultConfig) {
      if (this.config[option] != null) {
        continue;
      }

      this.config[option] =
        this.LoadingService.loadingConfig[option] != null
          ? this.LoadingService.loadingConfig[option]
          : this.defaultConfig[option];
    }
  }
}
