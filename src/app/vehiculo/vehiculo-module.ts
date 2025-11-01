import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehiculoListComponent
  ],
  exports: [
    VehiculoListComponent
  ]
})
export class VehiculoModule { }