import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductoComponent,
    ListProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
