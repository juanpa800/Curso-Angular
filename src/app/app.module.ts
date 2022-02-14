import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascota/mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotasComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
