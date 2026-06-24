import { inject, Injectable } from '@angular/core';
import { Dialog } from "@angular/cdk/dialog"
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
import { IComment } from '../../domain/tasks/interfaces/comments.interface';
import { TaskFormModalComponent } from '../../features/tasks/components/task-form-modal/task-form-modal.component';
import { TaskCommentsModalComponent } from '../../features/tasks/components/task-comments-modal/task-comments-modal.component';
import { ITask } from '../../domain/tasks/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {
  private readonly _dialog = inject(Dialog)

  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: "95%"
  }

  openNewTaskModal() {
    return this._dialog.open<ITaskFormControls>(TaskFormModalComponent, {
      ...this.modalSizeOptions,
      // disableClose: true, ao clicar fora do dialog não fecha.
      data: {
        mode: "create",
        formValues: {
          name: '',
          description: '',
        },
      },
    });
  }

  openEditTaskModal(formValues: ITaskFormControls) {
    return this._dialog.open<ITaskFormControls>(TaskFormModalComponent, {
      ...this.modalSizeOptions,
      // disableClose: true, ao clicar fora do dialog não fecha.
      data: {
        mode: 'edit',
        formValues,
      }
    })
  }

  openTaskCommentsModal(task: ITask) {
    return this._dialog.open<IComment[] | undefined>(TaskCommentsModalComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: task,
    })
  }
}
