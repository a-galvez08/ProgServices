import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { VisualizarInformacionComponent } from './components/visualizar-informacion/visualizar-informacion.component';
const routes: Routes = [
  {path: 'tablaUsuarios', component: TablaUsuariosComponent},
  {path: 'crearUsuarios', component: CrearUsuarioComponent},
  {path: 'actualizarUsuarios', component: ActualizarUsuarioComponent},
  {path: 'informacion', component: VisualizarInformacionComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'informacion'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
