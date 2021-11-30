import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CiclismoComponent } from './categorias/ciclismo/ciclismo.component';
import { SkateComponent } from './categorias/skate/skate.component';
import { NatacaoComponent } from './categorias/natacao/natacao.component';
import { RugbyComponent } from './categorias/rugby/rugby.component';
import { FutebolComponent } from './categorias/futebol/futebol.component';
import { CorridaComponent } from './categorias/corrida/corrida.component';
import { BaseballComponent } from './categorias/baseball/baseball.component';
import { MotocrossComponent } from './categorias/motocross/motocross.component';
import { VoleiComponent } from './categorias/volei/volei.component';
import { FutsalComponent } from './categorias/futsal/futsal.component';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CiclismoComponent,
    SkateComponent,
    NatacaoComponent,
    RugbyComponent,
    FutebolComponent,
    CorridaComponent,
    BaseballComponent,
    MotocrossComponent,
    VoleiComponent,
    FutsalComponent,
    CategoriasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
