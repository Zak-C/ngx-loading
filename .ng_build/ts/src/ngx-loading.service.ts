import { Injectable, Inject, Optional } from '@angular/core';

import { ILoadingConfig, LoadingConfig } from './ngx-loading.config';

@Injectable()
export class LoadingConfigService {
    public loadingConfig: ILoadingConfig;

    constructor( @Optional() @Inject('loadingConfig') private config: ILoadingConfig) {
        this.loadingConfig = config || new LoadingConfig();
    }
}