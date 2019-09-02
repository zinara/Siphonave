import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuriosityComponent } from './curiosity.component';

const routes: Routes = [
  { path: '', component: CuriosityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuriosityRoutingModule { }
