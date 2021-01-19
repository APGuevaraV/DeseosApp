import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList) lista:IonList;
  @Input() terminada = true;


  constructor(public deseosService:DeseosService,
              private router:Router,
              private alertCtrl:AlertController) { }

  ngOnInit() {}

  listaSeleccionada (lista:Lista){

    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
    
  }

  borrarLista(list:Lista){
    this.deseosService.borrarLista(list);

  }

  async editarLista(lista:Lista){       
    const alert = await this.alertCtrl.create({
      header: 'Editar Nombre',
      inputs:[{
              name:'nuevotitulo',
              type: 'text',
              value: lista.titulo,
              placeholder:'Nuevo título'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler :() =>{
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
          
        },
        {
          text:'Aceptar',
          handler :(data) =>{
            console.log(data);
            if (data.nuevotitulo.length ===0) {
              return;
            }

            lista.titulo = data.nuevotitulo;
            this.deseosService.saveStorage();
            this.lista.closeSlidingItems();
          }
        }
    ]
    });

     alert.present();
}

}
