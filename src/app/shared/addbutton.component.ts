import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemformComponent } from './itemform/itemform.component';
import { Item } from './itemform/item';

@Component({
  selector: 'app-addbutton',
  template: `
  <button mat-fab style="background-color:white; color: black" class="new-btn" (click)="openItemForm()">
  <mat-icon class="mat-icon" aria-label="icon-button with an add icon">add</mat-icon>
</button>
  `,
  styleUrls: ['./addbutton.component.scss']
})
export class AddbuttonComponent implements OnInit {

   mainresult: Item[] = [];


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openItemForm() {
    const dialogRef = this.dialog.open(ItemformComponent, { width: '450px', autoFocus: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mainresult.push(result);
      } else {
        dialogRef.close();
      }
    });
    }
}
