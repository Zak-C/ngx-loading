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

Import the `LoadingConfig` and `ANIMATION_TYPES` into your application component. Importing these two items are optional, however, this is a required step if you wish to customise ngx-loading. `LoadingConfig` is used to create a set of configuration options for ngx-loading. `ANIMATION_TYPES` are a set of constants that can be referenced, when setting the `animationType` configuration option.

You must create a boolean (e.g. `loading` below) that is accessible from the component which will contain ngx-loading. This boolean is used as an input into ngx-loading, and will determine when the loading spinner is visible.

```typescript
import { Component, OnInit } from '@angular/core';
import { LoadingConfig, ANIMATION_TYPES } from 'ngx-loading';

@Component({
    //...
})
export class AppComponent implements OnInit {
    //...
    public loading = false;
    public loadingConfig: LoadingConfig = {
        animationType: ANIMATION_TYPES.rotatingPlane,
        backdropBorderRadius: '14px',
        backdropBackgroundColour: 'rgba(0,0,0,0.3)',
        primaryColour: '#0000ff',
        secondaryColour: '#00ff00',
        tertiaryColour: '#ff0000'
    };

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

Next, add the ngx-loading component selector to your application component's template. Set the `[show]` input variable of ngx-loading to point to your boolean, which will determine when ngx-loading is visible. Optionally set the `[loadingConfig]` input variable of ngx-loading to point to your `LoadingConfig` object. If the `[loadingConfig]` input variable is not set, the ngx-loading default styling options will be used. 

NOTE: ngx-loading will fill the entirety of its parent component. If you wish for ngx-loading to only fill a specific element within your component, ensure that ngx-loading is a child element of that element, and that the containing element has its `position` attribute set to `relative`.

```html
<div class="my-container">
    <ngx-loading [show]="loading" [loadingConfig]="loadingConfig"></ngx-loading>
    //...
</div>
```

## Input parameters
The ngx-loading input parameters are displayed below.

| Input | Required | Details |
| ---- | ---- | ---- |
| show | Required | A boolean, which will determine when ngx-loading is visible. |
| loadingConfig | Optional | A set of configuration options for ngx-loading. If this is not specified, the system default options will be used. See - [LoadingConfig options](#loadingconfig-options). |

## LoadingConfig options
The LoadingConfig options are displayed below. Each of these are optional, and passing a LoadingConfig to ngx-loading is itself, optional. If a LoadingConfig is not set, the system default options will be used.

| Option | Required | Default | Details |
| ---- | ---- | ---- | ---- |
| animationType | Optional | ANIMATION_TYPES.threeBounce | The animation to be used within ngx-loading. Use the ANIMATION_TYPES constant to select valid options. |
| backdropBorderRadius | Optional | 0 | The border-radius to be applied to the ngx-loading backdrop, e.g. '14px'. |
| backdropBackgroundColour | Optional | rgba(0, 0, 0, 0.3) | The background-color to be applied to the ngx-loading backdrop, e.g. 'rgba(255, 255, 255, 0.2)'. |
| primaryColour | Optional | #ffffff | The primary colour, which will be applied to the ngx-loading animation. |
| secondaryColour | Optional | #ffffff | The secondary colour, which will be applied to the ngx-loading animation (where appropriate). |
| tertiaryColour | Optional | #ffffff | The tertiary colour, which will be applied to the ngx-loading animation (where appropriate). |