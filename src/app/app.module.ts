import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeModule } from './components/page-home/page-home.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditModule } from './components/add-edit/add-edit.module';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageHomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AddEditModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
