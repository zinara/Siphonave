import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../validate';
import { ChildItems } from '../itemform/item';

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

  constructor(private dialogRef: MatDialogRef<ClassComponent>,
    private fb: FormBuilder) { }

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

  onSend() {
    // TODO: Use EventEmitter with form value
    this.dialogRef.close(this.classForm.value);
   // console.warn(this.classForm.value);
  }

}
