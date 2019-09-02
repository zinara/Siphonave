import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemformRoutingModule } from './itemform-routing.module';
import { ItemformComponent } from './itemform.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ItemformComponent],
  imports: [
    CommonModule,
    ItemformRoutingModule,
    SharedModule
  ]
})
export class ItemformModule { }
