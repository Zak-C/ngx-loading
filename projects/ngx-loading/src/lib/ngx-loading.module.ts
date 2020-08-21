import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { INgxLoadingConfig } from '../public_api';
import { NgxLoadingComponent } from './ngx-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxLoadingComponent],
  exports: [NgxLoadingComponent]
})
export class NgxLoadingModule {
  static forRoot(loadingConfig: INgxLoadingConfig): ModuleWithProviders<NgxLoadingModule> {
    return {
      ngModule: NgxLoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
    };
  }
}
