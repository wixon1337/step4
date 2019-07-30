import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task-list/task-list.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output() taskClick: EventEmitter<String> = new EventEmitter<String>();

  @Input("name") task: Task;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.taskClick.next(this.task.name);
  }

}
