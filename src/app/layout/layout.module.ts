import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimarylayoutComponent } from './primarylayout/primarylayout.component';
import { SecondarylayoutComponent } from './secondarylayout/secondarylayout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PrimarylayoutComponent, SecondarylayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    SharedModule
  ], exports: [
    SharedModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
