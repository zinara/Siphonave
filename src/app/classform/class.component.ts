import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/validate';
import { ChildItems } from '../shared/item';
import { ClassService } from './class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  classForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  alltags: string[] = [];
  genTags: string[] = [];
  children: ChildItems[] = [];
  isLoadingResults = false;


  constructor( private fb: FormBuilder, private router: Router, private cardService: ClassService) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      tags: [this.alltags, [CustomValidators.validateRequired]],
      children: [this.children],
      date: [new Date()],
      isOpen: [false],
      showForm: [false]
      });
      this.classForm.controls['tags'].setValue(this.alltags);

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add your tag
    if ((value.trim() !== '')) {
      this.classForm.controls['tags'].setErrors(null);
      this.alltags.push(value.trim());
    }


 // Add tags to the general tag array
    this.alltags.forEach(tag => {
      this.genTags.push(tag);
    });

    this.classForm.controls['tags'].markAsDirty();

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const controller = this.classForm.controls['tags'];
    const index = this.alltags.indexOf(tag);

    if (index >= 0) {
      this.alltags.splice(index, 1);
    }
    controller.updateValueAndValidity();
    controller.markAsDirty();
  }

  onCreate() {
    this.cardService.createCard(this.classForm.value)
    .subscribe((res: any) => {
      this.isLoadingResults = false;
      this.router.navigate(['/mycards']);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
