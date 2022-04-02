import { NgModule } from '@angular/core';
import { InMemoryTasksStorage } from './in-memory-tasks.storage';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryTasksStorage],
  	exports: [] })
export class InMemoryTasksStorageModule {
}
