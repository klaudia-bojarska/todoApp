import {NgModule} from '@angular/core';
import {TasksState} from './tasks.state';
import {GETS_ALL_TASKS_QUERY} from '../ports/primary/gets-all-tasks.query-port';
import {HttpTasksServiceModule} from "../../adapters/secondary/infrastructure/http-tasks.service-module";
import { LOADS_TASKS_COMMAND } from '../ports/primary/loads-tasks.command-port';
import { ADDS_TASK_COMMAND } from '../ports/primary/adds-task.command-port';
import { DELETES_TASK_COMMAND } from '../ports/primary/deletes-task.command-port';
import { CLOSES_TASK_COMMAND } from '../ports/primary/closes-task.command-port';

@NgModule({
  imports: [HttpTasksServiceModule],
  declarations: [],
  providers: [
    TasksState,
    {provide: GETS_ALL_TASKS_QUERY, useExisting: TasksState},
    {
      provide: LOADS_TASKS_COMMAND,
      useExisting: TasksState,
    },
    { provide: ADDS_TASK_COMMAND, useExisting: TasksState },
    { provide: DELETES_TASK_COMMAND, useExisting: TasksState },
    { provide: CLOSES_TASK_COMMAND, useExisting: TasksState }
  ],
  exports: []
})
export class TasksStateModule {
}
