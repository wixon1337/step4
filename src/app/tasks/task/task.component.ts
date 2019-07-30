import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output() taskClick: EventEmitter<String> = new EventEmitter<String>();

  @Input()
  name = "";

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.taskClick.next(this.name);
  }

}
