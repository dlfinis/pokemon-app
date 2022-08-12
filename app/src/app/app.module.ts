import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestComponent } from './test/test.component';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { PokemonHomepageComponent } from 'src/components/pokemon-homepage/pokemon-homepage.component';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
import { MaterialModule } from './../modules/material-module';
import { AbilitiesFilterPipe } from './../pipes/abilitiesFilter.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PokemonHomepageComponent,
    PokemonHeaderComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
