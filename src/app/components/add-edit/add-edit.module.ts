import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit.component';

import { ButtonModule } from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AddEditComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    MessagesModule,
    MessageModule
  ]
})
export class AddEditModule { }
