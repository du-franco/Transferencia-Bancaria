import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = 'http://localhost:3000/tarefas'

  constructor(private http:HttpClient) { }

  getTarefas(){
    return this.http.get(this.url)
  }

  getUmaTarefa(id:any){
    return this.http.get(this.url + '/' + id)
  }

  addTarefa(tarefa:Tarefa){
    return this.http.post(this.url, tarefa)
  }

  deleteTarefa(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  editTarefa(id:any, tarefa:Tarefa){
    return this.http.put(this.url + '/' + id, tarefa)
  }
}
export interface Tarefa{
  id_transferencia?:string
  nome?:string
  valor?:string
  contaCliente?:string
}
