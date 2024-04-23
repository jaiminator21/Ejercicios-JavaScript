import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { TemplatesComponent } from './components/templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    EventosComponent,
    DirectivasComponent,
    TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
