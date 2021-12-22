import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from './../../servicos/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  tarefa: Tarefa={
    id_transferencia:'',
    nome:'',
    valor:'',
    contaCliente:'',
  }

  constructor(private TarefaService:TarefaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    console.log("id de entrada: " + id_entrada)
    this.TarefaService.getUmaTarefa(id_entrada).subscribe({
      next: (res) => {console.log(res)
      this.tarefa = res},
      error: (erro) => console.error(erro),
      complete: () => console.info('Tarefa encontrada!')
    })
  }

  modificar(){
    this.TarefaService.editTarefa(this.tarefa.id_transferencia,this.tarefa).subscribe({
      next: (resultado) => console.log("Tarefa editada com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Edição completada com êxito")

    })
    this.router.navigate(['/inicio'])

  }
}
