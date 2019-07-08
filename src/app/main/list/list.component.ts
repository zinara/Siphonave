import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AddbuttonComponent } from '../../shared/addbutton.component';
import { Item } from '../../shared/itemform/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  title = 'My List';
  links: Item[] = [];

  @ViewChild(AddbuttonComponent)
  private linker: AddbuttonComponent;

  constructor() {

   }

   ngAfterViewInit() {
  this.links = this.linker.mainresult;
   }

  ngOnInit() {
  }

}
