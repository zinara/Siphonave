import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimarylayoutComponent } from './primarylayout/primarylayout.component';
import { SecondarylayoutComponent } from './secondarylayout/secondarylayout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomeModule', data: {title: 'Home'} },
      { path: 'mylist', loadChildren: '../list/list.module#ListModule', data: {title: 'My List'} },
      { path: 'mycards', loadChildren: '../card/card.module#CardModule', data: {title: 'My Cards'} },
      { path: 'surveys', loadChildren: '../curiosity/curiosity.module#CuriosityModule', data: {title: 'Surveys'} },
    ]
  },
  {
    path: '',
    component: SecondarylayoutComponent,
    children: [
      { path: 'item/create', loadChildren: '../itemform/itemform.module#ItemformModule', data: {title: 'Generate'} },
      { path: 'card/create', loadChildren: '../classform/class.module#ClassModule', data: {title: 'Create Card'} }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
