import { InjectionToken } from '@angular/core';
import { LoadsTasksCommand } from './loads-tasks.command';

export const LOADS_TASKS_COMMAND = new InjectionToken<LoadsTasksCommandPort>('LOADS_TASKS_COMMAND');

export interface LoadsTasksCommandPort {
  loadsTasks(command: LoadsTasksCommand): void;
}
