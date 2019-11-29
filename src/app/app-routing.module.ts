import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';


const routes: Routes = [
{
  path: 'search',
  component: PageHomeComponent
},
{
  path: 'add',
  component: AddEditComponent
},
{
  path: 'edit',
  component: AddEditComponent
},
{
  path: '',
  component: PageHomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
