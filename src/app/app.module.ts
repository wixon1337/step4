import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { TaskComponent } from './tasks/components/task/task.component';
import { SzinesStringComponent } from './szines-string/szines-string.component';
import { TaskService } from './tasks/services/task.service';
import { LogServiceService } from './tasks/services/log-service.service';
import { AddTaskComponent } from './tasks/components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    TaskComponent,
    SzinesStringComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskService,
    LogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
