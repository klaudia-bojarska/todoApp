import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { GETS_ALL_TASKS_QUERY } from '../../../../application/ports/primary/gets-all-tasks.query-port';
import { TasksState } from '../../../../application/state/tasks.state';
import { LOADS_TASKS_COMMAND } from '../../../../application/ports/primary/loads-tasks.command-port';
import { TasksStateModule } from '../../../../application/state/tasks.state-module';

@NgModule({
  imports: [CommonModule, TasksStateModule],
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
})
export class TaskListComponentModule {}
