import { Vehiculo } from './vehiculo';

describe('Vehiculo', () => {
  it('should create an instance', () => {
    const vehiculo = new Vehiculo(1, 'Renault', 'Kangoo', 'REF1', 2017, 50000, 'Blanco', 'img.jpg');
    expect(vehiculo).toBeTruthy();
  });

  it('should have correct properties', () => {
    const vehiculo = new Vehiculo(1, 'Renault', 'Kangoo', 'REF1', 2017, 50000, 'Blanco', 'img.jpg');
    expect(vehiculo.marca).toBe('Renault');
    expect(vehiculo.linea).toBe('Kangoo');
    expect(vehiculo.modelo).toBe(2017);
  });
});