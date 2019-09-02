import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AddbuttonComponent } from './addbutton.component';
import { NewclassComponent } from './newclass.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddbuttonComponent, NewclassComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ], exports: [
    AddbuttonComponent,
    NewclassComponent,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
