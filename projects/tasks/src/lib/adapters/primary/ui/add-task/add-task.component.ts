import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddsTaskCommand } from '../../../../application/ports/primary/adds-task.command';
import { AddsTaskCommandPort, ADDS_TASK_COMMAND } from '../../../../application/ports/primary/adds-task.command-port';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
    form = new FormControl('');

    constructor(@Inject(ADDS_TASK_COMMAND) private addsTaskCommand: AddsTaskCommandPort) {}

  onAddClick() {
    this.addsTaskCommand.addsTask(new AddsTaskCommand({content: this.form.value}));
    this.form.reset();
  }
}
