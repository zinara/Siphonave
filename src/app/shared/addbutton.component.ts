import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-addbutton',
  template: `
  <button mat-fab style="background-color:white; color: black" class="new-btn" [routerLink]="['/item', 'create']" routerLinkActive>
  <mat-icon class="mat-icon" aria-label="icon-button with an add icon">add</mat-icon>
</button>
  `,
  styleUrls: ['./addbutton.component.scss']
})
export class AddbuttonComponent implements OnInit {

   mainresult: Item[] = [];


  constructor() { }

  ngOnInit() {
  }

 /* openItemForm() {
    const dialogRef = this.dialog.open(ItemformComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mainresult.push(result);
      } else {
        dialogRef.close();
      }
    });
  } */

}
