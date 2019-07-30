import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = ["ajgisdjg", "aosdgjsog", "kosdgkogsd", "tégla", "templom"];

  startsWithT(string) {
    if (string.charAt(0) === 't') {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
