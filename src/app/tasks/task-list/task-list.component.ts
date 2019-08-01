import { Component, OnInit } from '@angular/core';

export class Task {
  name: string;
  owner: string;

  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Array<Task> = [
    new Task("asdasd", "há én"),
    new Task("asd2", "há te"),
    new Task("asd3", "há ő"),
    new Task("asd4", "há én"),
    new Task("asd5", "há én")
  ];


  constructor() { }

  ngOnInit() {
  }

  startsWithT(string) {
    if (string.charAt(0) === 't') {
      return true;
    } else {
      return false;
    }
  }

  onTaskClicked(name: string) {
    console.log(name);
  }
  onHundredStatus(statusz: number) {
    alert("Nagyon sokszor nyomtad bástya (" + statusz + ")");
  }
}
