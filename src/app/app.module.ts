import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule } from '../../projects/ngx-loading/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
