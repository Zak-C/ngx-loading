import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { INgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingComponent } from './ngx-loading.component';

@NgModule({
  declarations: [
    NgxLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxLoadingComponent
  ]
})
export class NgxLoadingModule {
  static forRoot(loadingConfig: INgxLoadingConfig): ModuleWithProviders<NgxLoadingModule> {
    return {
      ngModule: NgxLoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
    };
  }
}

