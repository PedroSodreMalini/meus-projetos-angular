import { Component, inject } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from "@angular/cdk/drag-drop"
import { AsyncPipe } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../../../../core/services/task.service';
import { TaskStatusEnum } from '../../../../domain/tasks/enums/task-status.enum';
import { ITask } from '../../../../domain/tasks/interfaces/task.interface';
import { TaskStatus } from '../../../../domain/tasks/types/task-status.type';

@Component({
  selector: 'app-task-list-section',
  imports: [
    TaskCardComponent,
    CdkDropList,
    CdkDrag,
    AsyncPipe,
  ],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css'
})
export class TaskListSectionComponent {
  public readonly _taskService = inject(TaskService)

  onCardDrop(event: CdkDragDrop<ITask[]>) {
    this.moveCardToColumn(event)

    const taskId = event.item.data.id;
    const taskCurrentStatus = event.item.data.status;
    const droppedColumn = event.container.id;

    this.updateTaskStatus(taskId, taskCurrentStatus, droppedColumn)
  }

  updateTaskStatus(taskId: string, taskCurrentStatus: TaskStatus, droppedColumn: string) {
    let newStatus: TaskStatus;

    if (droppedColumn === "to-do-column") {
      newStatus = TaskStatusEnum.TODO;
    } else if (droppedColumn === "doing-column") {
      newStatus = TaskStatusEnum.DOING
    } else if (droppedColumn === "done-column") {
      newStatus = TaskStatusEnum.DONE
    } else {
      throw Error("Coluna não identificada.")
    }

    this._taskService.updateTaskStatus(taskId, taskCurrentStatus, newStatus)
  }


  moveCardToColumn(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
