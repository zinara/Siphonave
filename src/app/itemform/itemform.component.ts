import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/validate';
import { Router } from '@angular/router';
import { ItemService } from './item.service';


@Component({
  selector: 'app-itemform',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.scss']
})
export class ItemformComponent implements OnInit {
  dumpForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  alltags: string[] = [];
  genTags: string[] = [];
  isLoadingResults = false;


constructor( private fb: FormBuilder, private router: Router, private service: ItemService ) { }

ngOnInit() {
 this.dumpForm = this.fb.group({
    mode: 'Personal',
    link: ['' , Validators.required],
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
    tags: [this.alltags, [CustomValidators.validateRequired]],
    date: [new Date()]
    });

    this.dumpForm.controls['tags'].setValue(this.alltags);
}



  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add your tag
    if ((value.trim() !== '')) {
      this.dumpForm.controls['tags'].setErrors(null);
      this.alltags.push(value.trim());
    }


 // Add tags to the general tag array
    this.alltags.forEach(tag => {
      this.genTags.push(tag);
    });

    this.dumpForm.controls['tags'].markAsDirty();

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const controller = this.dumpForm.controls['tags'];
    const index = this.alltags.indexOf(tag);

    if (index >= 0) {
      this.alltags.splice(index, 1);
    }
    controller.updateValueAndValidity();
    controller.markAsDirty();
  }

  onCreate() {
  this.service.createItem(this.dumpForm.value)
  .subscribe((res: any) => {
    const id = res._id;
    this.isLoadingResults = false;
    this.router.navigate(['/mylist']);
  }, (err: any) => {
    console.log(err);
    this.isLoadingResults = false;
  });

  }

}
