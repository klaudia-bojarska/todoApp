import { InjectionToken } from '@angular/core';
import { DeletesTaskCommand } from './deletes-task.command';

export const DELETES_TASK_COMMAND = new InjectionToken<DeletesTaskCommandPort>('DELETES_TASK_COMMAND');

export interface DeletesTaskCommandPort {
  deletesTask(command: DeletesTaskCommand): void;
}
