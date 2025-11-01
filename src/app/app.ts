import { Component, signal } from '@angular/core';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list';

@Component({
  selector: 'app-root',
  imports: [VehiculoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vehiculos-app');
}