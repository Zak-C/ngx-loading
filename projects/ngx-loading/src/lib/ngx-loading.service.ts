import { Inject, Injectable, Optional } from '@angular/core';
import { INgxLoadingConfig, NgxLoadingConfig } from './ngx-loading-config';

@Injectable({
  providedIn: 'root'
})
export class NgxLoadingService {
  public loadingConfig: INgxLoadingConfig;

  constructor(@Optional() @Inject('loadingConfig') private config: INgxLoadingConfig) {
    this.loadingConfig = this.config || new NgxLoadingConfig();
  }
}
