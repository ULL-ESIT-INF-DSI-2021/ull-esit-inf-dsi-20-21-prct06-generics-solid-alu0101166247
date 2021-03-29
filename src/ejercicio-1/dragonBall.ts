import {universos} from "./efectividades";
import {estadisticas, Fighter} from "./fighter";
/**
 * Clase DragonBall para personajes del universo de DragonBall
 */
export class DragonBall extends Fighter {
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
      private readonly universo: universos = universos.DragonBall) {
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
