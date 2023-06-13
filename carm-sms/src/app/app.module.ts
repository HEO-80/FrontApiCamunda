import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './Views/listado/listado.component';
import { EntradaComponent } from './Views/listado/entrada/entrada.component';
import { HeaderComponent } from './Views/header/header.component';
import { FooterComponent } from './Views/footer/footer.component';
import { PaginaNoEncontradaComponent } from './Views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AboutComponent } from './Views/about/about.component';
import { HomeComponent } from './Views/home/home.component';
import { MisTareasComponent } from './Views/mis-tareas/mis-tareas.component';
import { TareasGrupoComponent } from './Views/tareas-grupo/tareas-grupo.component';
import { FormsModule } from '@angular/forms';
import { ExpedientesComponent } from './Views/expedientes/expedientes.component';
import { UserComponent } from './Views/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    HeaderComponent,
    FooterComponent,
    PaginaNoEncontradaComponent,
    AboutComponent,
    HomeComponent,
    MisTareasComponent,
    TareasGrupoComponent,
    ExpedientesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
