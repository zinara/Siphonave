import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuriosityRoutingModule } from './curiosity-routing.module';
import { CuriosityComponent } from './curiosity.component';

@NgModule({
  declarations: [CuriosityComponent],
  imports: [
    CommonModule,
    CuriosityRoutingModule
  ]
})
export class CuriosityModule { }
