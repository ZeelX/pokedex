import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedescriptComponent } from './pokedescript/pokedescript.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokedescriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
