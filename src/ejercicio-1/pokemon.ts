import {universos} from "./efectividades";
import {estadisticas, Fighter} from "./fighter";
/**
 * Enumerable para los elementos de los Pokemones
 */
export enum elemento {Electrico, Agua, Fuego, Hierba}
/**
 * Clase Pokemon para personajes del universo de Pokemon
 */
export class Pokemon extends Fighter {
  /**
   * Constructor de la clase
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param frase Frase del personaje
   * @param estadistica Estadisticas del personaje
   * @param elemento Elemento de personaje
   * @param universo Universo del personaje
   */
  constructor(nombre: string,
      peso: number,
      altura: number,
      frase: string,
      estadistica: estadisticas,
      private elemento: elemento,
      private readonly universo: universos = universos.Pokemon) {
    super(nombre, peso, altura, frase, estadistica);
  }
  /**
   * Get del universo del personaje
   * @returns Universo
   */
  getUniverso(): universos {
    return this.universo;
  }
}
