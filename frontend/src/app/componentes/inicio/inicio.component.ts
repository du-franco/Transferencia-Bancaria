import { TarefaService, Tarefa } from './../../servicos/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarTarefa: Tarefa[]

  constructor(private tarefa:TarefaService, private router:Router) {
    this.ListarTarefa = []
  }

  ngOnInit(): void {
    this.listarTarefa()
  }

  listarTarefa(){
    this.tarefa.getTarefas().subscribe({
      next: (res) => {console.log(res)
                      this.ListarTarefa = <any>res},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
  })
  }

  excluir(id:any){
    this.tarefa.deleteTarefa(id).subscribe({
      next:(res) => {console.log("Tarefa excluida")
                     this.listarTarefa()},
      error: (erro) => console.log(erro),
      complete: () => console.info ("Processo de exclusão completado")
    })
  }

  editar(id:any){
    this.router.navigate(['/edit/' + id])
  }

}
