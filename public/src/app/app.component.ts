import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restful Task Continued';
  tasks = [];
  singleTask = null;
  constructor(private _httpService: HttpService) {
    this.getTasks();
    this.getId();
  }

  getTasks() {
    let tempObservable = this._httpService.getTasks()
    tempObservable.subscribe(data => {
      this.tasks = data['data'];
      console.log("Got our tasks!", data)
    });

  }
  getId() {
    let tempObservable = this._httpService.getId();
    tempObservable.subscribe(data => {
      this.singleTask = data['data'];
      console.log("Got our ID", data)
    });
  }
}