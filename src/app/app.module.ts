import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //Importa otras librerias externas
  imports: [
    BrowserModule
  ],
  //Servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
