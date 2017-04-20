import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './ngx-loading.component';

@NgModule({
    imports: [CommonModule],
    exports: [LoadingComponent],
    declarations: [LoadingComponent],
    providers: [],
})
export class LoadingModule { }
