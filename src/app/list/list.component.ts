import { Component, OnInit } from '@angular/core';
import { ItemService } from '../itemform/item.service';
import { Item } from '../shared/item';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists: Item[] = [];
  isLoadingResults = true;


  constructor(private itemService: ItemService) {

   }


  ngOnInit() {
    this.itemService.getItemList()
    .subscribe((res: any) => {
      this.lists = res;
     // console.log(this.lists);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
