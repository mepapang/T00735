import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "../search/search.component";
import { PageHomeComponent } from "./page-home.component";
import { ResultListComponent } from '../result-list/result-list.component';

import { ButtonModule } from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchComponent, PageHomeComponent, ResultListComponent],
  imports: [
    CommonModule, 
    ButtonModule, 
    InputTextModule, 
    TableModule, 
    PaginatorModule, 
    DropdownModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [PageHomeComponent]
})
export class PageHomeModule {}
