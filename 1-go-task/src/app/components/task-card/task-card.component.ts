import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  private readonly _modalControllerService = inject(ModalControllerService)

  openEditTaskModal() {
    const dialogRef = this._modalControllerService.openEditTaskModal({ 
      name: 'Tarefa 1',
      description: 'Descrição 1'
    })

    dialogRef.closed.subscribe((taskForm) => {
      console.log("==== Editar tarefa ====")
      console.log(taskForm)
    })
  }

  openTaskCommentsModal() {
    this._modalControllerService.openTaskCommentsModal()
  }
}
