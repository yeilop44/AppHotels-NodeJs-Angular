import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { HotelsComponent } from './component/hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
