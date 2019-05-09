import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { MaterialModule } from '../shared/material.module';

import { HomeComponent } from './home/home.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'curiosity', component: CuriosityComponent},
  { path: 'home', component: HomeComponent },
  { path: 'mycards', component: CardComponent },
  { path: 'mylist', component: ListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  declarations: [HomeComponent, CuriosityComponent, CardComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    CuriosityComponent,
    CardComponent,
    ListComponent
  ]
})
export class MainModule { }
