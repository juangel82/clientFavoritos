// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito.js';
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-edit',
    templateUrl: 'app/views/favorito-add.html',
providers:[FavoritoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class FavoritoEditComponent implements OnInit{

public titleSection: string;
public favorito: Favorito;
public errorMessage:any;
constructor(private _favoritoService:FavoritoService,
private _route: ActivatedRoute,
private _router :Router){
this.titleSection = "Editar Favorito";

}
ngOnInit(){
 this.favorito = new Favorito("","","","");
  this.getFavorito();
}

getFavorito(){
  this._route.params.forEach((params:Params) => {
    let id = params['id'];
  this._favoritoService.getFavorito(id).subscribe(
response=>{

  this.favorito = response.favorito;
if(!this.favorito){
  this._router.navigate(['/']);
}


    },
error=>{

  this.errorMessage = <any>error;
      if(this.errorMessage!=null){
      console.log(this.errorMessage);
      alert('Error en la mierda de petecion');
      }


    }
    );
    });

}

public onSubmit(){
  console.log(this.favorito);
  this._route.params.forEach((params:Params) => {
    let id = params['id'];
    this._favoritoService.editFavorito(id,this.favorito).subscribe(
      response =>{
        if(!response.favorito){
          alert('error en el sevidor add');
        }else{
          this.favorito = response.favorito;
          this._router.navigate(['/marcador',this.favorito._id]);
        }
      },
      error=>{
        this.errorMessage = <any>error;
        if(this.errorMessage !=null){
        console.log(this.errorMessage),
        alert('Error en la peticion add');
        }
     }
    );
  })
}


}
