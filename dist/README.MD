[![npm version](https://badge.fury.io/js/ngx-loading.svg)](https://badge.fury.io/js/ngx-loading)

# ngx-loading
This is the repository for ngx-loading.

ngx-loading is a customisable loading spinner for Angular 4.

![ngx-loading](https://cloud.githubusercontent.com/assets/26901242/25317405/05a1ce4a-2870-11e7-8693-ed2394b54cba.gif)

## Installation
Install ngx-loading via NPM, using the command below.

### NPM
```shell
npm install --save ngx-loading
```

## Getting started
Import the `LoadingModule` in your root application module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  //...
  imports: [
    //...
    LoadingModule
  ],
  //...
})
export class AppModule { }
```

You must create a boolean (e.g. `loading` below) that is accessible from the component which will contain ngx-loading. This boolean is used as an input into ngx-loading, and will determine when the loading spinner is visible.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    //...
})
export class AppComponent implements OnInit {
    //...
    public loading = false;

    constructor(private authService: AuthService) { }

    ngOnInit() { }

    Login() {
        this.loading = true;
        this.authService.login(this.email, this.password)
            .subscribe(res => {
                this.loading = false;
                //...
            }, err => {
                this.loading = false;
                //...
            });
    }
}
```

Next, add the ngx-loading component selector to your application component's template. Set the `[show]` input variable of ngx-loading to point to your boolean, which will determine when ngx-loading is visible. Optionally set the `[config]` input variable of ngx-loading to setup custom configuration options. If the `[config]` input variable is not set, the globally configured configuration will be used, if set. If no config options are set, the ngx-loading default config options will be used. See - [Config options](#config-options) for further information.

NOTE: ngx-loading will fill the entirety of its parent component. If you wish for ngx-loading to only fill a specific element within your component, ensure that ngx-loading is a child element of that element, and that the containing element has its `position` attribute set to `relative`.

```html
<div class="my-container">
    <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '14px' }"></ngx-loading>
    //...
</div>
```

## Input parameters
The ngx-loading input parameters are displayed below.

| Input | Required | Details |
| ---- | ---- | ---- |
| show | Required | A boolean, which will determine when ngx-loading is visible. |
| config | Optional | A set of configuration options for ngx-loading. If this is not specified, the globally configured configuration will be used, if set. If no config options are set, the ngx-loading default config options will be used. See - [Config options](#config-options). |

## Config options
Config options can be set globally (using the `.forRoot() module import statement`), as well as being passed into each ngx-loading instance, if required. Config options that are passed into an ngx-loading element will override any custom global config options that have been set. A combination of the two can be used together if appropriate. If no config is set, the default ngx-loading config options will be used. Please see below for an example custom configuration setup, using both global and local configurations.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  //...
  imports: [
    //...
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff'
    })
  ],
  //...
})
export class AppModule { }
```

```html
<div class="my-container">
    <ngx-loading [show]="loading" [config]="{ animationType: ANIMATION_TYPES.rectangleBounce,
        backdropBackgroundColour: 'rgba(255,255,255,0.3)', backdropBorderRadius: '10px',
        primaryColour: '#ffffff', secondaryColour: '#ffffff', tertiaryColour: '#ffffff' }"></ngx-loading>
    //...
</div>
```

The config options are displayed below. Each of the properties are optional, and passing a config to ngx-loading is itself, optional. 

| Option | Required | Default | Details |
| ---- | ---- | ---- | ---- |
| animationType | Optional | ANIMATION_TYPES.threeBounce | The animation to be used within ngx-loading. Use the ANIMATION_TYPES constant to select valid options. |
| backdropBorderRadius | Optional | 0 | The border-radius to be applied to the ngx-loading backdrop, e.g. '14px'. |
| backdropBackgroundColour | Optional | rgba(0, 0, 0, 0.3) | The background-color to be applied to the ngx-loading backdrop, e.g. 'rgba(255, 255, 255, 0.2)'. |
| fullScreenBackdrop | Optional | false | Set to true to make the backdrop full screen, with the loading animation centered in the middle of the screen. |
| primaryColour | Optional | #ffffff | The primary colour, which will be applied to the ngx-loading animation. |
| secondaryColour | Optional | #ffffff | The secondary colour, which will be applied to the ngx-loading animation (where appropriate). |
| tertiaryColour | Optional | #ffffff | The tertiary colour, which will be applied to the ngx-loading animation (where appropriate). |