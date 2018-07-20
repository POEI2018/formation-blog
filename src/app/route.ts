import { Routes } from '@angular/router';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { ViewListComponent } from './view-list/view-list.component';

export const ROUTES: Routes = [
  {path:'articles', component: ViewListComponent},
  {path:'edit', component: ViewEditComponent},
  {path:'', redirectTo:'/articles', pathMatch:'full'}

] ;
