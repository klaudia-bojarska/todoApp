import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from './task.dto';

export const SETS_TASK_DTO = new InjectionToken<SetsTaskDtoPort>('SETS_TASK_DTO');

export interface SetsTaskDtoPort {
  close(id: number): Observable<void>;
}
