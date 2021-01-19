import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

    constructor() { 

    // const listaOne = new Lista( 'Recolectar piedras del infinito');
    // const listaTwo = new Lista( 'Heroes a desaparecer');

    // this.listas.push(listaOne,listaTwo);
    this.chargeStorage();
  }


  crearLista( titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.saveStorage();
    return nuevaLista.id;
  }


  obtenerLista( id:string | number){
    id = Number(id);
    return this.listas.find( listaData => listaData.id ===id );

  }

  saveStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));

  }

  chargeStorage(){
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }
  }

  borrarLista(list:Lista){

    this.listas=this.listas.filter( listaData => listaData.id!==list.id)
    this.saveStorage();
  }


}
