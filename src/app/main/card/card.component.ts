import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { NewclassComponent } from '../../shared/newclass.component';
import { ItemClass } from '../../shared/itemform/item';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

title = 'My Cards';
cards: ItemClass[] = [];
arrowIcon = 'keyboard_arrow_down';
options: FormGroup;

@ViewChild(NewclassComponent)
private linker: NewclassComponent;



  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cards = this.linker.classResult;
     }

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

  addItem(card, child) {
     child = this.formResult();
     card.children.push(child);
  }

}
