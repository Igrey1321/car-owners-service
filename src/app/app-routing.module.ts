import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { CarsDataComponent} from './cars-data/cars-data.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor', component: UserEditorComponent },
  { path: 'cars-data', component: CarsDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
