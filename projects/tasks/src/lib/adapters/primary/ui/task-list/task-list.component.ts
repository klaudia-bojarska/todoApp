import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import {
  GETS_ALL_TASKS_QUERY,
  GetsAllTasksQueryPort
} from '../../../../application/ports/primary/gets-all-tasks.query-port';
import {TasksQuery} from '../../../../application/ports/primary/tasks.query';
import {Observable} from "rxjs";
import {LoadsTasksCommand} from '../../../../application/ports/primary/loads-tasks.command';
import {
  LoadsTasksCommandPort,
  LOADS_TASKS_COMMAND
} from '../../../../application/ports/primary/loads-tasks.command-port';
import {
  CLOSES_TASK_COMMAND,
  ClosesTaskCommandPort
} from "../../../../application/ports/primary/closes-task.command-port";
import {
  DELETES_TASK_COMMAND,
  DeletesTaskCommandPort
} from "../../../../application/ports/primary/deletes-task.command-port";
import {ClosesTaskCommand} from "../../../../application/ports/primary/closes-task.command";
import {DeletesTaskCommand} from "../../../../application/ports/primary/deletes-task.command";

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<TasksQuery[]> = this._getsAllTasksQuery.getAllTasksQuery();

  constructor(
    @Inject(GETS_ALL_TASKS_QUERY) private _getsAllTasksQuery: GetsAllTasksQueryPort,
    @Inject(LOADS_TASKS_COMMAND) private _loadsTaskCommand: LoadsTasksCommandPort,
    @Inject(CLOSES_TASK_COMMAND) private _closesTaskCommand: ClosesTaskCommandPort,
    @Inject(DELETES_TASK_COMMAND) private _deletesTaskCommand: DeletesTaskCommandPort,
  ) {
  }

  ngOnInit(): void {
    this._loadsTaskCommand.loadsTasks(new LoadsTasksCommand());
  }

  onCheckClick(id: number) {
    this._closesTaskCommand.closesTask(new ClosesTaskCommand(id))
  }

  onDeleteTask(id: number) {
    this._deletesTaskCommand.deletesTask(new DeletesTaskCommand(id))
  }
}
