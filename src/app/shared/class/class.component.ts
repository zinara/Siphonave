import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  classForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      name: ['', [Validators.required]]
      });
  }

}
