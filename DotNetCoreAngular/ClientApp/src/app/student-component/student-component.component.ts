import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
  Name: string = 'Anurag';
  Branch: string = 'CSE';
  Mobile: number = 9876543210;
  Gender: string = 'Male';
  Age: number = 22;
  constructor() { }

  ngOnInit() {
  }

}
