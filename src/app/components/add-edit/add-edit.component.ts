import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  formAdd: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      date: new FormControl(''),
      product: new FormControl('',Validators.required),
      customer: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      total: new FormControl('')
    });
  }

}
