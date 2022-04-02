import { TaskDTO } from "../secondary/task.dto";

export class AddsTaskCommand {
  constructor(readonly task: Partial<TaskDTO>) {
  }
}
