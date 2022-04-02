import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TasksStateModule} from "../../../../application/state/tasks.state-module";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, TasksStateModule],
  	declarations: [AddTaskComponent],
  	providers: [],
  	exports: [AddTaskComponent] })
export class AddTaskComponentModule {
}
