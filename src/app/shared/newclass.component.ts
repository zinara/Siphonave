import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClassComponent } from './class/class.component';

@Component({
  selector: 'app-newclass',
  template: `
  <button mat-fab style="background-color:white; color: black" class="new-btn" (click)="openClassForm()">
  <mat-icon class="mat-icon" aria-label="icon-button with a class icon">class</mat-icon>
</button>
  `,
  styleUrls: ['./newclass.component.scss']
})
export class NewclassComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openClassForm(): void {
    const dialogRef = this.dialog.open(ClassComponent, {
      width: '350px',
    });
    }

}
