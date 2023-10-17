import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";  // Importando HttpClient para comunicação com o backend
import { FormsModule } from '@angular/forms';             // Importando FormsModule para utilizar o ngModel pra melhor trabalhar com as variáveis
import { MatIconModule } from '@angular/material/icon';   // Importando Icones do Angular Material para apresentar no front



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
