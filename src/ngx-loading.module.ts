import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { INgxLoadingConfig } from './ngx-loading-config';
import { NgxLoadingComponent } from './ngx-loading.component';
import { NgxLoadingService } from './ngx-loading.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxLoadingComponent],
  exports: [NgxLoadingComponent],
  providers: [NgxLoadingService]
})
export class NgxLoadingModule {
  static forRoot(loadingConfig: INgxLoadingConfig): ModuleWithProviders {
    return {
      ngModule: NgxLoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
    };
  }
}
