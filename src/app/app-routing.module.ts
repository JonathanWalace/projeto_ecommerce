import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaseballComponent } from './categorias/baseball/baseball.component';
import { CiclismoComponent } from './categorias/ciclismo/ciclismo.component';
import { CorridaComponent } from './categorias/corrida/corrida.component';
import { FutebolComponent } from './categorias/futebol/futebol.component';
import { RugbyComponent } from './categorias/rugby/rugby.component';
import { FutsalComponent } from './categorias/futsal/futsal.component';
import { SkateComponent } from './categorias/skate/skate.component';
import { MotocrossComponent } from './categorias/motocross/motocross.component';
import { VoleiComponent } from './categorias/volei/volei.component';
import { NatacaoComponent } from './categorias/natacao/natacao.component';

const routes: Routes = [ 
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'baseball', component: BaseballComponent},
    {path: 'ciclismo', component: CiclismoComponent},
    {path: 'corrida', component: CorridaComponent},
    {path: 'futebol', component: FutebolComponent},
    {path: 'rugby', component: RugbyComponent},
    {path: 'futsal', component: FutsalComponent},
    {path: 'skate', component: SkateComponent},
    {path: 'motocross', component: MotocrossComponent},
    {path: 'volei', component: VoleiComponent},
    {path: 'natacao', component: NatacaoComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
