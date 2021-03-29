import {universos} from "./efectividades";
import {estadisticas, Fighter} from "./fighter";
/**
 * Clase DC para personajes del universo DC
 */
export class DC extends Fighter {
  /**
   * Constructor de la clase
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param frase Frase del personaje
   * @param estadistica Estadisticas del personaje
   * @param universo Universo del personaje
   */
  constructor(nombre: string,
      peso: number,
      altura: number,
      frase: string,
      estadistica: estadisticas,
      private readonly universo: universos = universos.DC) {
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
