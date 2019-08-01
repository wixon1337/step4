import { Injectable } from '@angular/core';
import {Task} from '../components/task-list/task-list.component';

@Injectable()
export class TaskService {

  private _tasks: Array<Task> = [
    new Task('asdasd', 'há én'),
    new Task('asd2', 'há te'),
    new Task('asd3', 'há ő'),
    new Task('asd4', 'há én'),
    new Task('asd5', 'há én')
  ];

  constructor() { }

  get tasks(): Array<Task> {
    return this._tasks;
  }

  public addTask(newTask: Task) {
    this._tasks.push(newTask);
  }
}
