import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClassComponent } from './class/class.component';
import { ItemClass } from './itemform/item';

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

  classResult: ItemClass[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openClassForm(): void {
    const dialogRef = this.dialog.open(ClassComponent, { width: '400px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.classResult.push(result);
      } else {
        dialogRef.close();
      }
    });
    }

}
