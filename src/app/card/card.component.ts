import { Component, OnInit, DoCheck } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ClassService } from '../classform/class.service';
import { ItemClass } from '../shared/item';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

title = 'My Cards';
cards: ItemClass[] = [];
card: ItemClass;
arrowIcon = 'keyboard_arrow_down';
options: FormGroup;
isLoadingResults = false;

  constructor(private fb: FormBuilder, private service: ClassService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.service.getCardList()
    .subscribe((res: any) => {
      this.cards = res;
     // console.log(this.lists);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

  }

 /* ngDoCheck() {
    this.getCardChildren();
  } */

  toggleCard(card) {
      card.isOpen = !card.isOpen;
      if (card.isOpen) {
        this.arrowIcon = 'keyboard_arrow_right';
        card.showForm = false;
      } else {
        this.arrowIcon = 'keyboard_arrow_down';
      }

  }

  openAfterClick(card) {
   card.isOpen = true;
   card.showForm = true;

   this.options = this.fb.group({
    name: [''],
    link: [''],
  });
  }

  formResult() {
    return this.options.value;
  }

  getCardChildren(card) {
      this.service.getChildren(card).
      subscribe((res: any) => {
      card.children = res;
      }, err => {
        console.log(err);
      });
    }

  }


