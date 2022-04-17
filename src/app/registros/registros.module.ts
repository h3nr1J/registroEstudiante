import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrosRoutingModule } from './registros-routing.module';
import { RegistroEstudiantComponent } from './registro-estudiant/registro-estudiant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroEstudiantComponent
  ],
  imports: [
    CommonModule,
    RegistrosRoutingModule,FormsModule
  ]
})
export class RegistrosModule { }
