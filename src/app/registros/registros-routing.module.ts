import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEstudiantComponent } from './registro-estudiant/registro-estudiant.component';

const routes: Routes = [
  {
    path: '',
    children: [
      //definimos la ruta de registro/registroEstudiante de 
      //p referencia el path debe tener el nombre de estudiante
      { path: 'Estudiante', component: RegistroEstudiantComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
