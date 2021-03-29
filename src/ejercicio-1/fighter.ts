import {universos} from "./efectividades";
/**
 * Variable de tipo para almacenar estadisticas de los personajes
 */
export type estadisticas = {
    HP: number;
    ataque: number;
    defensa: number;
}
/**
 * Clase Fighter para representar personajes de los distintos Universos
 */
export abstract class Fighter {
  /**
   * Constructor de la clase Fighter
   * @param nombre Nombre del personaje
   * @param peso Peso del personaje
   * @param altura Altura del personaje
   * @param frase Frase del personaje
   * @param estadisticas Estadistica del personaje
   */
  constructor(private nombre: string,
        private peso: number,
        private altura: number,
        private frase: string,
        private estadisticas: estadisticas) { }
  /**
   * Get abstracto del universo
   */
  abstract getUniverso(): universos;
  /**
   * Get del nombre del personaje
   * @returns Nombre
   */
  getNombre(): string {
    return this.nombre;
  }
  /**
   * Get del peso del personaje
   * @returns Peso
   */
  getPeso(): number {
    return this.peso;
  }
  /**
   * Get de la altura del personaje
   * @returns Altura
   */
  getAltura(): number {
    return this.altura;
  }
  /**
   * Get de la frase del personaje
   * @returns Frase
   */
  getFrase(): string {
    return this.frase;
  }
  /**
   * Get de la vida del personaje
   * @returns HP
   */
  getHP(): number {
    return this.estadisticas.HP;
  }
  /**
   * Get del ataque del personaje
   * @returns Ataque
   */
  getAtaque(): number {
    return this.estadisticas.ataque;
  }
  /**
   * Get de la defensa del personaje
   * @returns Defensa
   */
  getDefensa(): number {
    return this.estadisticas.defensa;
  }
}
