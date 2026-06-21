import { Component, inject, OnInit } from '@angular/core';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-behaviour-context',
  imports: [],
  templateUrl: './behaviour-context.component.html',
  styleUrl: './behaviour-context.component.css'
})
export class BehaviourContextComponent implements OnInit {
  private readonly _contextService = inject(ContextService)

  ngOnInit(): void {
    this._contextService.items$.subscribe((value) => {
      console.log("Valor: ", value)
    })

    this._contextService.adicionarItem({ nome: "teste", price: 123 });
  }
}
