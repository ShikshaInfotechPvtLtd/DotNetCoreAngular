import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.employeeForm = this.fb.group({
      email: [''],
      pwd: [''],
      isCheckbox:['']
    });

  }
  onSubmit(): void {
    console.log(this.employeeForm.value);
    console.log(this.employeeForm);
  }
  onLoadData(): void {
    this.employeeForm.setValue({
      email: "Ravindra@gmail.com",
      pwd: "ravindra",
      isCheckbox: true
      
    })
  }
}
