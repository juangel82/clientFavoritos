import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';
import {FavoritosListComponent} from './components/favoritos-list.component';
import {routing, appRoutingProviders} from './app.routing';
import {FavoritoDetailComponent} from './components/favorito-detail.component';
import {FavoritoAddComponent} from './components/favorito-add.component';
import {FavoritoEditComponent} from './components/favorito-edit.component';
@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  declarations: [
    AppComponent,
    FavoritosListComponent,
    FavoritoDetailComponent,
    FavoritoAddComponent,
    FavoritoEditComponent
  ],
providers:[appRoutingProviders],
bootstrap:    [ AppComponent ]
})

export class AppModule { }
