import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.html',
  styleUrls: ['./vehiculo-list.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  totalPorMarca: { [key: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.calcularTotalPorMarca();
    });
  }

  calcularTotalPorMarca(): void {
    this.totalPorMarca = {};
    this.vehiculos.forEach(vehiculo => {
      if (this.totalPorMarca[vehiculo.marca]) {
        this.totalPorMarca[vehiculo.marca]++;
      } else {
        this.totalPorMarca[vehiculo.marca] = 1;
      }
    });
  }

  getMarcas(): string[] {
    return Object.keys(this.totalPorMarca);
  }
}