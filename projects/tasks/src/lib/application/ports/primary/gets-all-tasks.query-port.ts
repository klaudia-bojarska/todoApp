import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksQuery } from './tasks.query';

export const GETS_ALL_TASKS_QUERY = new InjectionToken<GetsAllTasksQueryPort>('GETS_ALL_TASKS_QUERY');

export interface GetsAllTasksQueryPort {
  getAllTasksQuery(): Observable<TasksQuery[]>;
}
