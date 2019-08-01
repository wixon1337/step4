import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';

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

  public tasks: Array<Task>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

  startsWithT(string) {
    if (string.charAt(0) === 't') {
      return true;
    } else {
      return false;
    }
  }

  onTaskClicked(name: string) {
    alert(name);
  }


}
