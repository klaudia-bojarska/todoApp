import { InjectionToken } from '@angular/core';
import { ClosesTaskCommand } from './closes-task.command';

export const CLOSES_TASK_COMMAND = new InjectionToken<ClosesTaskCommandPort>('CLOSES_TASK_COMMAND');

export interface ClosesTaskCommandPort {
  closesTask(command: ClosesTaskCommand): void;
}
