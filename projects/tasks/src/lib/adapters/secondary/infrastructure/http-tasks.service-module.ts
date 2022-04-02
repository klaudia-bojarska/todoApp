import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpTasksService } from './http-tasks.service';
import { GETS_ALL_TASK_DTO } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';
import { REMOVES_TASK_DTO } from '../../../application/ports/secondary/removes-task.dto-port';
import { SETS_TASK_DTO } from '../../../application/ports/secondary/sets-task.dto-port';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpTasksService, { provide: GETS_ALL_TASK_DTO, useExisting: HttpTasksService }, { provide: ADDS_TASK_DTO, useExisting: HttpTasksService }, { provide: REMOVES_TASK_DTO, useExisting: HttpTasksService }, { provide: SETS_TASK_DTO, useExisting: HttpTasksService }],
  	exports: [] })
export class HttpTasksServiceModule {
}
