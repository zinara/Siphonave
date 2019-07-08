import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipList, MatChipInput} from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../validate';
import { DISABLED } from '@angular/forms/src/model';


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

constructor(private dialogRef: MatDialogRef<ItemformComponent>,
  private fb: FormBuilder) { }

ngOnInit() {
 this.dumpForm = this.fb.group({
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

  onSend() {
    // TODO: Use EventEmitter with form value
    this.dialogRef.close(this.dumpForm.value);
  }

}
