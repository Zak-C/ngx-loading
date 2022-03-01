import { CommonModule } from '@angular/common';
import type { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import type { INgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingComponent } from './ngx-loading.component';
@NgModule({
  declarations: [NgxLoadingComponent],
  imports: [CommonModule],
  exports: [NgxLoadingComponent],
})
export class NgxLoadingModule {
  static forRoot(
    loadingConfig: INgxLoadingConfig
  ): ModuleWithProviders<NgxLoadingModule> {
    return {
      ngModule: NgxLoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }],
    };
  }
}
