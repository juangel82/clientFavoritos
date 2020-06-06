import {Component, OnInit} from '@angular/core';
import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';
import {Router,ActivatedRoute,Params} from '@angular/router';

  @Component({
    selector:'favoritos-list',
    templateUrl:'app/views/favoritos-list.html',
providers:[FavoritoService]
    })

export class FavoritosListComponent implements OnInit {
  public title: string;
public loading: boolean;
  public errorMessage;
  public confirmado;
  public favoritos: Favorito[];

constructor(private _favoritoService: FavoritoService){
this.title = 'listado de tu coño :';
  this.loading = true;
  }

ngOnInit(){
  console.log('FavoritosListComponent cagado');
  this.getFavoritos();
}

onBorrarConfirm(id){
  this.confirmado = id;
}
onCancelarConfirm(id){
  this.confirmado = null;
}
onBorrarFavorito(id){
  this._favoritoService.deleteFavorito(id).subscribe(
result=>{
if(!result.message){
  alert('error borrando');
}
  this.getFavoritos();

},
    error => {
      this.errorMessage = <any>error;
      if(this.errorMessage!=null){
      console.log(this.errorMessage);
      alert('Error en la peticion');
      }
    }

  );
}

getFavoritos(){
    this._favoritoService.getFavoritos().subscribe(
    result => {
      console.log(result);
      this.favoritos = result.favoritos;
      if(!this.favoritos){
        alert('Error en el servidor');
    }else{
     this.loading = false;
    }
    },

  );
}


}
