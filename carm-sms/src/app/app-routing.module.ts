import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListadoComponent } from './Views/listado/listado.component';
import { AboutComponent } from './Views/about/about.component';
import { PaginaNoEncontradaComponent } from './Views/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './Views/home/home.component';
import { MisTareasComponent } from './Views/mis-tareas/mis-tareas.component';
import { TareasGrupoComponent } from './Views/tareas-grupo/tareas-grupo.component';
import { ExpedientesComponent } from './Views/expedientes/expedientes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'mis-tareas', component: MisTareasComponent},
  {path: 'tareas-grupo', component: TareasGrupoComponent},
  {path:'expediente', component: ExpedientesComponent},
  { path: 'listado', component: ListadoComponent },
  { path: '', redirectTo: '/listado', pathMatch: 'full'},
  
  {path: 'about', component: AboutComponent},
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
