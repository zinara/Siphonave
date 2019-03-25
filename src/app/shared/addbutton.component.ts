import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbutton',
  template: `
  <button mat-fab style="background-color:black; color: white" class="new-btn">
  <mat-icon class="mat-icon" aria-label="icon-button with an add icon">add</mat-icon>
</button>
  `,
  styleUrls: ['./addbutton.component.scss']
})
export class AddbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
