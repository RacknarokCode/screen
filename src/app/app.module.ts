import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoguinComponent } from './componentes/loguin/loguin.component';
import { Loguin2Component } from './componentes/loguin2/loguin2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    Loguin2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
