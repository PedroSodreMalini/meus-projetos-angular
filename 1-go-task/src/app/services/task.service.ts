import { Injectable } from '@angular/core';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
import { ITask } from '../interfaces/task.interface';
import { BehaviorSubject, map, tap } from 'rxjs';
import { generateUniqueId } from '../utils/generate-unique-id';
import { TaskStatus } from '../types/task-status.type';
import { IComment } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Tarefas a fazer.
  private todoTasks$ = new BehaviorSubject<ITask[]>(
    this.loadTasksFromLocalStorage(TaskStatusEnum.TODO)
  );
  readonly todoTasks = this.todoTasks$.asObservable().pipe(
    map(todoList => structuredClone(todoList)),
    tap(todoList => this.saveTasksOnLocalStorage(TaskStatusEnum.TODO, todoList)),
  );

  // Tarefas fazendo
  private doingTasks$ = new BehaviorSubject<ITask[]>(
    this.loadTasksFromLocalStorage(TaskStatusEnum.DOING)
  );
  readonly doingTasks = this.doingTasks$.asObservable().pipe(
    map(doingList => structuredClone(doingList)),
    tap(doingList => this.saveTasksOnLocalStorage(TaskStatusEnum.DOING, doingList)),
  );

  // Tarefas feitas
  private doneTasks$ = new BehaviorSubject<ITask[]>(
    this.loadTasksFromLocalStorage(TaskStatusEnum.DONE)
  );
  readonly doneTasks = this.doneTasks$.asObservable().pipe(
    map(doneList => structuredClone(doneList)),
    tap(doneList => this.saveTasksOnLocalStorage(TaskStatusEnum.DONE, doneList)),
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

  updateTaskStatus(taskId: string, currentStatus: TaskStatus, nextStatus: TaskStatus) {
    const currentTaskList = this.getTaskListByStatus(currentStatus)
    const nextTaskList = this.getTaskListByStatus(nextStatus)

    const currentTask = currentTaskList.value.find((t) => t.id === taskId)
    console.log(currentTask?.comments)

    if(currentTask) {
      // Atualiza status da tarefa.
      currentTask.status = nextStatus

      // tira a tarefa da antiga lista.
      currentTaskList.next(currentTaskList.value.filter((t) => t.id !== taskId))
      
      // coloca a tarefa na nova lista.
      nextTaskList.next([...nextTaskList.value, currentTask])
    }
  }

  updateTask(taskId: string, taskStatus: TaskStatus, taskName: string, taskDescription: string) {
    const taskList = this.getTaskListByStatus(taskStatus)
    
    const newList = taskList.value.map((t) => {
      if(t.id == taskId) {
        t.name = taskName;
        t.description = taskDescription
      }
      return t
    })

    taskList.next(newList)
  }

  deleteTask(taskId: string, taskStatus: TaskStatus) {
    const taskList = this.getTaskListByStatus(taskStatus)

    taskList.next(taskList.value.filter((t) => t.id !== taskId))
  }

  updateTaskComments(taskId: string, taskStatus: TaskStatus, newTaskComments: IComment[]) {
    const taskList = this.getTaskListByStatus(taskStatus)

    taskList.next(taskList.value.map((t) => {
      if(t.id === taskId) {
        t.comments = structuredClone(newTaskComments)
      }
      return t
    }))
  }

  private getTaskListByStatus(taskStatus: TaskStatus) {
    const taskListObj = {
      [TaskStatusEnum.DOING]: this.doingTasks$,
      [TaskStatusEnum.DONE]: this.doneTasks$,
      [TaskStatusEnum.TODO]: this.todoTasks$,
    }

    return taskListObj[taskStatus];
  }

  private saveTasksOnLocalStorage(key: TaskStatus, tasks: ITask[]) {
    try {
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar tarefas no local storage", error);
    }
  }

  private loadTasksFromLocalStorage(key: TaskStatus) {
    try {
      const list = localStorage.getItem(key);
      return list ? JSON.parse(list) : [];
    } catch (error) {
      console.error("Erro ao obter tarefas no local storage", error);
      return []
    }
  }
}
