import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { ApitodoComponent } from './apitodo/apitodo.component';
import {ApitodoService} from "./apitodo/apitodo.service";
import {HttpClientModule} from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodoComponent,
    ApitodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [ ApitodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
