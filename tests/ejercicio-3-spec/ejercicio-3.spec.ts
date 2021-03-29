/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {serie, Series} from '../../src/ejercicio-3/series';
import {documental, Documentales} from '../../src/ejercicio-3/documentales';
import {pelicula, Peliculas} from '../../src/ejercicio-3/peliculas';
import {search} from '../../src/ejercicio-3/searchable';

// Series
const Peaky: serie = {titulo: "Peaky Blinders",
  año: 2013,
  temporadas: 5,
  episodios: 30,
  genero: "Accion",
  clasificacion: "B"};
const Reeks: Series = new Series([]);
Reeks.addItem(Peaky);

const Formula: serie = {titulo: "Formula 1: Drive to Survive",
  año: 2019,
  temporadas: 3,
  episodios: 20,
  genero: "Documentales sobre deportes",
  clasificacion: "A"};
Reeks.addItem(Formula);

// Peliculas
const GodzVSKong: pelicula = {titulo: "Godzilla vs. Kong",
  año: 2021,
  duracion: 113,
  genero: "Accion",
  clasificacion: "AA"};
const Films: Peliculas = new Peliculas([]);
Films.addItem(GodzVSKong);

const MonsterHunter: pelicula = {titulo: "Monster Hunter",
  año: 2020,
  duracion: 104,
  genero: "Fantasia",
  clasificacion: "B"};
Films.addItem(MonsterHunter);

// Documentales
const KimDotcom: documental = {titulo: "Kim Dotcom: Caught in the Web",
  año: 2017,
  duracion: 108,
  genero: "Suspenso",
  clasificacion: "A"};
const Documentaries: Documentales = new Documentales([]);
Documentaries.addItem(KimDotcom);

const Crack: documental = {titulo: "Crack: Cocaina, Corrupción y conspiración",
  año: 2021,
  duracion: 89,
  genero: "Sociocultural",
  clasificacion: "C"};
Documentaries.addItem(Crack);

// Pruebas
describe('Pruebas para el ejercicio 3 - DSIflix', () => {
  it('Reeks.getNumberOfItems() returns value 2', () => {
    expect(Reeks.getNumberOfItems()).to.be.equal(2);
  });
  it('Films.getItems() returns value [GodzVSKong, MonsterHunter]', () => {
    expect(Films.getItems()).to.deep.equal([GodzVSKong, MonsterHunter]);
  });
  it('Documentaries.searchBy(search.Año, 2021) returns value [KimDotcom]', () => {
    expect(Documentaries.searchBy(search.Año, 2017)).to.deep.equal([KimDotcom]);
  });
  it('Documentaries.searchBy(search.Titulo, "Crack: Cocaina, Corrupción y conspiración") returns value [Crack]', () => {
    expect(Documentaries.searchBy(search.Titulo, "Crack: Cocaina, Corrupción y conspiración")).to.deep.equal([Crack]);
  });
  it('Films.searchBy(search.Clasificacion, "AA") returns value [GodzVSKong]', () => {
    expect(Films.searchBy(search.Clasificacion, "AA")).to.deep.equal([GodzVSKong]);
  });
  it('Films.searchBy(search.Año, 2020) returns value [MonsterHunter]', () => {
    expect(Films.searchBy(search.Año, 2020)).to.deep.equal([MonsterHunter]);
  });
  it('Reeks.searchBy(search.Titulo, "Peaky Blinders") returns value [Peaky]', () => {
    expect(Reeks.searchBy(search.Titulo, "Peaky Blinders")).to.deep.equal([Peaky]);
  });
  it('Reeks.searchBy(search.Año, 2019) returns value [Formula]', () => {
    expect(Reeks.searchBy(search.Año, 2019)).to.deep.equal([Formula]);
  });
});
