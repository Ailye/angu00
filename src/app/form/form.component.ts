import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  myForm = this.fb.group({
    name: ['', Validators.required],
    prenom: [''],
    age: ['', Validators.min(18)]
  });
  ngOnInit() {
  }

}
