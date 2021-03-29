/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {estadisticas, Fighter} from '../../src/ejercicio-1/fighter';
import {UniverseDex} from '../../src/ejercicio-1/universedex';
import {universos} from '../../src/ejercicio-1/efectividades';
import {Combat} from '../../src/ejercicio-1/combat';
import {DC} from '../../src/ejercicio-1/dc';
import {DragonBall} from '../../src/ejercicio-1/dragonBall';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {elemento, Pokemon} from '../../src/ejercicio-1/pokemon';
import {StarWars} from '../../src/ejercicio-1/starWars';

// Pokemon
let stats: estadisticas = {HP: 90, ataque: 80, defensa: 60};
const pikachu: Pokemon = new Pokemon("Pikachu", 10, 0.70, "Pika-Pika-Chu", stats, elemento.Electrico);
// Marvel
stats = {HP: 120, ataque: 90, defensa: 75};
const thor: Marvel = new Marvel("Thor", 90, 1.80, "Yo soy Thor, hijo de Odín", stats);
// DC
stats = {HP: 100, ataque: 80, defensa: 65};
const batman: DC = new DC("Batman", 80, 1.75, "¿Qué intentabas probar?", stats);
// Star Wars
stats = {HP: 160, ataque: 70, defensa: 70};
const yoda: StarWars = new StarWars("Yoda", 60, 1.40, "La muerte una parte natural de la vida es...", stats);
// Dragon Ball
stats = {HP: 110, ataque: 80, defensa: 55};
const goku: DragonBall = new DragonBall("Goku", 70, 1.70, "Ni tú, ni yo ni nadie golpea tan fuerte como la vida...", stats);

// UniverseDex
const dex: UniverseDex = new UniverseDex;
dex.setPersonaje(pikachu);
dex.setPersonaje(thor);
dex.setPersonaje(batman);
dex.setPersonaje(yoda);
dex.setPersonaje(goku);
const personaje: string = dex.viewPersonaje("Batman");

// Combate
const combate: Combat = new Combat(yoda, thor);
combate.setFirst(yoda);
combate.setSecond(thor);
const salida: string = combate.start();

// Pruebas
describe('Pruebas para el ejercicio 1 - El combate definitivo', () => {
  it('pikachu.getUniverso() returns value Pokemon', () => {
    expect(pikachu.getUniverso()).to.be.equal(universos.Pokemon);
  });
  it('goku.getUniverso() returns value DragonBall', () => {
    expect(goku.getUniverso()).to.be.equal(universos.DragonBall);
  });
  it('thor.getHP() returns value 120', () => {
    expect(thor.getHP()).to.be.equal(120);
  });
  it('yoda.getAltura() returns value 1.40', () => {
    expect(yoda.getAltura()).to.be.equal(1.40);
  });
  it('dex.getPersonajes() returns value [pikachu, thor, batman, yoda, goku]', () => {
    expect(dex.getPersonajes()).to.deep.equal([pikachu, thor, batman, yoda, goku]);
  });
  it('dex.viewPersonaje("Batman") returns value variable personaje', () => {
    expect(dex.viewPersonaje("Batman")).to.be.equal(personaje);
  });
  it('combate.getFirst() returns value yoda', () => {
    expect(combate.getFirst()).to.be.equal(yoda);
  });
  it('combate.getSecond() returns value thor', () => {
    expect(combate.getSecond()).to.be.equal(thor);
  });
  it('combate.start() returns value variable salida', () => {
    expect(combate.start()).to.be.equal(salida);
  });
});
