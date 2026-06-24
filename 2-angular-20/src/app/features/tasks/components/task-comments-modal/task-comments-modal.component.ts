import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITask } from '../../../../domain/tasks/interfaces/task.interface';
import { IComment } from '../../../../domain/tasks/interfaces/comments.interface';
import { generateUniqueId } from '../../../../shared/utils/generate-unique-id';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.component.html',
  styleUrl: './task-comments-modal.component.css'
})
export class TaskCommentsModalComponent {
  taskCommentsChanged = false;
  commentControl = new FormControl(
    "",
    [Validators.required],
  )

  @ViewChild('commentInput') commentInputRef!: ElementRef<HTMLInputElement>;

  readonly _task = inject<ITask>(DIALOG_DATA)
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef)

  onAddComment() {
    const newComment: IComment = {
      id: generateUniqueId(),
      description: this.commentControl.value ?? "",
    }

    this._task.comments.unshift(newComment)

    this.commentControl.reset(); // limpa o input

    this.taskCommentsChanged = true;

    this.commentInputRef.nativeElement.focus(); // foca no input após comentar
  }

  onRemoveComment(commentId: string) {
    this._task.comments = this._task.comments.filter((c) => c.id !== commentId)

    this.taskCommentsChanged = true;
  }

  onCloseModal() {
    this._dialogRef.close(this.taskCommentsChanged);
  }
}
