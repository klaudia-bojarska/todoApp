import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodosPage } from './todos.page';
import { AddTaskComponentModule, TaskListComponentModule } from 'projects/tasks/src';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodosPage,
      },
    ]),
    TaskListComponentModule,
    AddTaskComponentModule,
  ],
  declarations: [TodosPage],

  providers: [],
  exports: [TodosPage],
})
export class TodosPageModule {}
