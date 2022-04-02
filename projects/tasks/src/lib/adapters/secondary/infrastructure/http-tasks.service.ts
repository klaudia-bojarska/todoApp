import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { filterByCriterion } from '@lowgular/shared';
import { environment } from 'src/environments/environment';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Injectable()
export class HttpTasksService implements GetsAllTaskDtoPort, AddsTaskDtoPort, RemovesTaskDtoPort, SetsTaskDtoPort {
  constructor(private _client: HttpClient) {}

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client.get<TaskDTO[]>(`${environment.apiUrl}/v1/tasks`).pipe(
      map((data) =>
        data.map((task) => ({
          id: task.id,
          content: task.content,
        }))
      ),
      map((data) => filterByCriterion(data, criterion))
    );
  }

  add(task: Partial<TaskDTO>): Observable<TaskDTO> {
    return this._client.post<TaskDTO>(`${environment.apiUrl}/v1/tasks`, task);
  }

  remove(id: number): Observable<void> {
    return this._client.delete<void>(`${environment.apiUrl}/v1/tasks/${id}`);
  }

  close(id: number): Observable<void> {
    return this._client.post<void>(`${environment.apiUrl}/v1/tasks/${id}/close`, {});
  }
}
