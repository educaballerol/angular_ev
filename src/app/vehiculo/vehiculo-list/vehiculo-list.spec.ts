import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { VehiculoListComponent } from './vehiculo-list';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let vehiculoService: VehiculoService;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoListComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        VehiculoService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    vehiculoService = TestBed.inject(VehiculoService);
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una tabla con encabezado y tres filas de datos', () => {
    // Crear un listado de 3 vehículos de prueba
    const vehiculosMock: Vehiculo[] = [
      new Vehiculo(1, 'Renault', 'Kangoo', 'REF1', 2017, 50000, 'Blanco', 'img1.jpg'),
      new Vehiculo(2, 'Chevrolet', 'Spark', 'REF2', 2018, 30000, 'Rojo', 'img2.jpg'),
      new Vehiculo(3, 'Nissan', 'March', 'REF3', 2019, 20000, 'Azul', 'img3.jpg')
    ];

    spyOn(vehiculoService, 'getVehiculos').and.returnValue(of(vehiculosMock));
    fixture.detectChanges();

    // Verificar que se crearon los vehículos en el componente
    expect(component.vehiculos.length).toBe(3);

    const tabla = debug.query(By.css('table'));
    expect(tabla).toBeTruthy();

    // Verificar el encabezado (thead con 1 fila)
    const thead = debug.query(By.css('thead'));
    expect(thead).toBeTruthy();
    const filasEncabezado = thead.queryAll(By.css('tr'));
    expect(filasEncabezado.length).toBe(1);

    // Verificar las filas de datos (tbody con 3 filas)
    const tbody = debug.query(By.css('tbody'));
    expect(tbody).toBeTruthy();
    const filasDatos = tbody.queryAll(By.css('tr'));
    expect(filasDatos.length).toBe(3);

    // Verificación adicional: verificar contenido de la primera fila
    const primeraFila = filasDatos[0];
    const celdas = primeraFila.queryAll(By.css('td'));
    expect(celdas[0].nativeElement.textContent.trim()).toBe('1');
    expect(celdas[1].nativeElement.textContent.trim()).toBe('Renault');
    expect(celdas[2].nativeElement.textContent.trim()).toBe('Kangoo');
    expect(celdas[3].nativeElement.textContent.trim()).toBe('2017');
  });
});