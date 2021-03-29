/* eslint-disable max-len */
/**
 * Enumerable para representar los Universos de los personajes
 */
export enum universos {Pokemon = 'Pokemon', Marvel = 'Marvel', DC = 'DC', StarWars = 'Star Wars', DragonBall = 'Dragon Ball'}
/**
 * Clase para calcular las efectividades entre los distintos universos
 */
export class Efectividad {
  /**
   * Constructor de la clase Efectividad
   * @param UniversoA Universo atacante
   * @param UniversoD Universo defensor
   * @param Efectividad Efectividad del ataque
   */
  constructor(public UniversoA: universos,
      public UniversoD: universos,
      public Efectividad: number) {
  }
}
/**
 * Funcion que almacena las efectividades de cada Universo
 * @returns Arreglo con las efectividades
 */
export function cargarEfectividad(): Efectividad[] {
  const efectList: Efectividad[] = [];
  let efect: Efectividad;
  efect = new Efectividad(universos.Pokemon, universos.Pokemon, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.Pokemon, universos.Marvel, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.Pokemon, universos.DC, 0.5);
  efectList.push(efect);
  efect = new Efectividad(universos.Pokemon, universos.StarWars, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.Pokemon, universos.DragonBall, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.DC, universos.DC, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.DC, universos.Marvel, 0.5);
  efectList.push(efect);
  efect = new Efectividad(universos.DC, universos.StarWars, 0.5);
  efectList.push(efect);
  efect = new Efectividad(universos.DC, universos.Pokemon, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.DC, universos.DragonBall, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.Marvel, universos.Marvel, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.Marvel, universos.Pokemon, 0.5);
  efectList.push(efect);
  efect = new Efectividad(universos.Marvel, universos.DC, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.Marvel, universos.StarWars, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.Marvel, universos.DragonBall, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.StarWars, universos.StarWars, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.StarWars, universos.Marvel, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.StarWars, universos.Pokemon, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.StarWars, universos.DC, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.StarWars, universos.DragonBall, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.DragonBall, universos.DragonBall, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.DragonBall, universos.Marvel, 1);
  efectList.push(efect);
  efect = new Efectividad(universos.DragonBall, universos.Pokemon, 0.5);
  efectList.push(efect);
  efect = new Efectividad(universos.DragonBall, universos.DC, 2);
  efectList.push(efect);
  efect = new Efectividad(universos.DragonBall, universos.StarWars, 1);
  efectList.push(efect);
  return efectList;
}
