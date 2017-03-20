import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { component2 } from  './component2';
 import { component3 } from './component3';
 import { component4 } from './component4';
 import { component5 } from './component5';
import { routingModule } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    component2,
    component3,
    component4,
    component5,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
