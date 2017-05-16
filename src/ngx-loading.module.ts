import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './ngx-loading.component';
import { ILoadingConfig } from './ngx-loading.config';
import { LoadingConfigService } from './ngx-loading.service';

@NgModule({
    imports: [CommonModule],
    exports: [LoadingComponent],
    declarations: [LoadingComponent],
    providers: [LoadingConfigService],
})
export class LoadingModule {
    static forRoot(loadingConfig: ILoadingConfig): ModuleWithProviders {
        return {
            ngModule: LoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    }
}
