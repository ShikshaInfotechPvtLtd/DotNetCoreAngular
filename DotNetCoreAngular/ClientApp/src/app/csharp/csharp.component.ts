import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
@Component({
  selector: 'app-csharp',
  template: '<app-student-component></app-student-component>',
  styleUrls: ['./csharp.component.css'],
  providers: [ServicesComponent]
})
export class CsharpComponent implements OnInit {
  pageHeader: string = 'Student Details';
  name: String = "ravi";
  address: string = "Marathahalli";
  mobile: string = "7338318501";
  constructor(private services: ServicesComponent) {
    
  }

  ngOnInit() {
    console.log(this.services.showTodayDate());
  }

}
