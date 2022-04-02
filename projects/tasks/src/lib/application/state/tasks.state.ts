import { Injectable, Inject } from '@angular/core';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../ports/secondary/gets-all-task.dto-port';
import { TaskDTO } from '../ports/secondary/task.dto';
import { BehaviorSubject, tap, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTasksQueryPort } from '../ports/primary/gets-all-tasks.query-port';
import { TasksQuery } from '../ports/primary/tasks.query';
import { LoadsTasksCommand } from '../ports/primary/loads-tasks.command';
import {
  TASK_DTO_STORAGE,
  TaskDtoStoragePort,
} from '../ports/secondary/task-dto.storage-port';
import { AddsTaskCommandPort } from '../ports/primary/adds-task.command-port';
import { AddsTaskCommand } from '../ports/primary/adds-task.command';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../ports/secondary/adds-task.dto-port';
import { DeletesTaskCommandPort } from '../ports/primary/deletes-task.command-port';
import { DeletesTaskCommand } from '../ports/primary/deletes-task.command';
import { ClosesTaskCommandPort } from '../ports/primary/closes-task.command-port';
import { ClosesTaskCommand } from '../ports/primary/closes-task.command';
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from '../ports/secondary/sets-task.dto-port';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../ports/secondary/removes-task.dto-port';

@Injectable()
export class TasksState
  implements
    GetsAllTasksQueryPort,
    AddsTaskCommandPort,
    DeletesTaskCommandPort,
    ClosesTaskCommandPort
{
  private _tasks$: BehaviorSubject<TaskDTO[]> = new BehaviorSubject<TaskDTO[]>(
    []
  );
  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort
  ) {}

  loadsTasks(command: LoadsTasksCommand) {
    this._getsAllTaskDto
      .getAll()
      .pipe(tap((data) => this._tasks$.next(data)))
      .subscribe();
  }

  getAllTasksQuery(): Observable<TasksQuery[]> {
    return this._tasks$
      .asObservable()
      .pipe(
        map((data) => data.map((task) => new TasksQuery(task.id, task.content)))
      );
  }

  addsTask(command: AddsTaskCommand): void {
    this._addsTaskDto
      .add(command.task)
      .subscribe(() => this.loadsTasks(new LoadsTasksCommand()));
  }

  deletesTask(command: DeletesTaskCommand): void {
    this._removesTaskDto.remove(command.id)
      .subscribe(() => this.loadsTasks(new LoadsTasksCommand()));
  }

  closesTask(command: ClosesTaskCommand): void {
    this._setsTaskDto.close(command.id)
      .subscribe(() => this.loadsTasks(new LoadsTasksCommand()));
  }
}
