import { InjectionToken } from '@angular/core';
import {Observable} from "rxjs";

export const REMOVES_TASK_DTO = new InjectionToken<RemovesTaskDtoPort>('REMOVES_TASK_DTO');

export interface RemovesTaskDtoPort {
  remove(id: number): Observable<void>;
}
