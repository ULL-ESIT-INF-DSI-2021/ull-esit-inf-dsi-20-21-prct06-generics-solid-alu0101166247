/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {forceUnits, Fuerza} from '../../src/ejercicio-2/fuerza';
import {lengthUnits, Longitud} from '../../src/ejercicio-2/longitud';
import {Masa, massUnits} from '../../src/ejercicio-2/masa';
import {Temperatura, temperatureUnits} from '../../src/ejercicio-2/temperatura';
import {Tiempo, timeUnits} from '../../src/ejercicio-2/tiempo';
import {speedUnits, Velocidad} from '../../src/ejercicio-2/velocidad';
import {Volumen, volumeUnits} from '../../src/ejercicio-2/volumen';

const force: Fuerza = new Fuerza;
const mass: Masa = new Masa;
const time: Tiempo = new Tiempo;
const speed: Velocidad = new Velocidad;
const vol: Volumen = new Volumen;
const temp: Temperatura = new Temperatura;
const length: Longitud = new Longitud;

// Pruebas
describe('Pruebas para el ejercicio 2 - Conversor de unidades', () => {
  it('force.convert(100, forceUnits.NewtonToKilopondio) returns value 100 Newtons -> 10.197162129999999 Kilopondios', () => {
    expect(force.convert(100, forceUnits.NewtonToKilopondio)).to.be.equal("100 Newtons -> 10.197162129999999 Kilopondios");
  });
  it('force.convert(100, forceUnits.KilopondioToNewton) returns value 100 Kilopondios -> 980.665 Newtons', () => {
    expect(force.convert(100, forceUnits.KilopondioToNewton)).to.be.equal("100 Kilopondios -> 980.665 Newtons");
  });
  it('mass.convert(100, massUnits.KilogramosToGramos) returns value 100 Kilogramos -> 100000 Gramos', () => {
    expect(mass.convert(100, massUnits.KilogramosToGramos)).to.be.equal("100 Kilogramos -> 100000 Gramos");
  });
  it('mass.convert(100, massUnits.GramosToKilogramos) returns value 100 Gramos -> 0.1 Kilogramos', () => {
    expect(mass.convert(100, massUnits.GramosToKilogramos)).to.be.equal("100 Gramos -> 0.1 Kilogramos");
  });
  it('time.convert(100, timeUnits.MinutosToSegundos) returns value 100 Minutos -> 6000 Segundos', () => {
    expect(time.convert(100, timeUnits.MinutosToSegundos)).to.be.equal("100 Minutos -> 6000 Segundos");
  });
  it('time.convert(100, timeUnits.SegundosToMinutos) returns value 100 Segundos -> 1.6666666666666667 Minutos', () => {
    expect(time.convert(100, timeUnits.SegundosToMinutos)).to.be.equal("100 Segundos -> 1.6666666666666667 Minutos");
  });
  it('speed.convert(100, speedUnits.KMpHToMph) returns value 100 KMpH -> 62.137100000000004 MpH', () => {
    expect(speed.convert(100, speedUnits.KMpHToMph)).to.be.equal("100 KMpH -> 62.137100000000004 MpH");
  });
  it('speed.convert(100, speedUnits.MpHToKMpH) returns value 100 MpH -> 160.934 KMpH', () => {
    expect(speed.convert(100, speedUnits.MpHToKMpH)).to.be.equal("100 MpH -> 160.934 KMpH");
  });
  it('vol.convert(100, volumeUnits.LitrosToMililitros) returns value 100 Litros -> 100000 Mililitros', () => {
    expect(vol.convert(100, volumeUnits.LitrosToMililitros)).to.be.equal("100 Litros -> 100000 Mililitros");
  });
  it('vol.convert(100, volumeUnits.MililitrosToLitros) returns value 100 Mililitros -> 0.1 Litros', () => {
    expect(vol.convert(100, volumeUnits.MililitrosToLitros)).to.be.equal("100 Mililitros -> 0.1 Litros");
  });
  it('temp.convert(100, temperatureUnits.CelsiusToFahrenheit) returns value 100 °C -> 212 °F', () => {
    expect(temp.convert(100, temperatureUnits.CelsiusToFahrenheit)).to.be.equal("100 °C -> 212 °F");
  });
  it('temp.convert(100, temperatureUnits.FahrenheitToCelsius) returns value 100 °F -> 37.77777777777778 °C', () => {
    expect(temp.convert(100, temperatureUnits.FahrenheitToCelsius)).to.be.equal("100 °F -> 37.77777777777778 °C");
  });
  it('length.convert(100, lengthUnits.CentimetrosToMetros) returns value 100 Centimetros -> 1 Metros', () => {
    expect(length.convert(100, lengthUnits.CentimetrosToMetros)).to.be.equal("100 Centimetros -> 1 Metros");
  });
  it('length.convert(100, lengthUnits.MetrosToCentimetros) returns value 100 Metros -> 10000 Centimetros', () => {
    expect(length.convert(100, lengthUnits.MetrosToCentimetros)).to.be.equal("100 Metros -> 10000 Centimetros");
  });
});
