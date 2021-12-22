import { Tarefa, TarefaService } from './../../servicos/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  tarefa:Tarefa = {
    id_transferencia:'',
    nome:'',
    valor:'',
    contaCliente:''
  }

  constructor(private TarefaService:TarefaService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    //aqui deletamos o atributo id_tarefa, pois esse atributo é criado de forma automatica
    delete this.tarefa.id_transferencia

    //aqui fizemos a inserção da nova tarefa no banco de dados
    this.TarefaService.addTarefa(this.tarefa).subscribe({
    next: (res) => console.log("Tarefa Cadastrada com Sucesso"),
    error: (erro) => console.error(erro),
    complete: () => console.info('Completado o Cadastro')
  })
    //voltar para a tabela de tarefas (componente inicio)
    this.router.navigate(['/inicio'])
  }

}
