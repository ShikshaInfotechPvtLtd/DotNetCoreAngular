import { Component, OnInit, Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  api_key = 'PUT_YOUR_API_KEY_HERE';
  constructor() { }

  ngOnInit() {
  }
  showTodayDate(): any {
    let dt = new Date();
    return dt;
  }
}
