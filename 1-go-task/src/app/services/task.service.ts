import { Injectable } from '@angular/core';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
import { ITask } from '../interfaces/task.interface';
import { BehaviorSubject, map } from 'rxjs';
import { generateUniqueId } from '../utils/generate-unique-id';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Tarefas a fazer.
  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable().pipe(
    map(todoList => structuredClone(todoList))
  );

  // Tarefas fazendo
  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.doingTasks$.asObservable().pipe(
    map(doingList => structuredClone(doingList))
  );

  // Tarefas feitas
  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.doneTasks$.asObservable().pipe(
    map(doneList => structuredClone(doneList))
  );

  addTask(data: ITaskFormControls) {
    const newTask: ITask = {
      comments: [],
      description: data.description,
      id: generateUniqueId(),
      name: data.name,
      status: TaskStatusEnum.TODO,
    }

    const currentList = this.todoTasks$.value;

    this.todoTasks$.next([...currentList, newTask]);
  }
}
