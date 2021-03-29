/* eslint-disable max-len */
import {Fighter} from "./fighter";
/**
 * Clase para representar una especie de enciclopedia de personajes
 */
export class UniverseDex {
  /**
   * Constructor de la clase UniverseDex
   * @param personajes Arreglo con personajes
   */
  constructor(private personajes?: Fighter[]) {
    if (!personajes) {
      this.personajes = [];
    }
  }
  /**
   * Set para agregar personajes a la Dex
   * @param personaje Nuevo personaje
   */
  setPersonaje(personaje: Fighter) {
    this.personajes?.push(personaje);
  }
  /**
   * Get de los personajes almacenados
   * @returns Personajes
   */
  getPersonajes() {
    return this.personajes;
  }
  /**
   * Funcion que devuelve un string con la informacion del personaje buscado
   * @param nombre Nombre del personaje
   * @returns String con la informacion
   */
  viewPersonaje(nombre: string): string {
    let out: string = "";
    const personaje = this.personajes?.find( (personaje) => personaje.getNombre() === nombre);
    if (personaje) {
      out += "Nombre : " + personaje.getNombre() + "\n";
      out += "Frase : " + personaje.getFrase() + "\n";
      out += "Altura : " + personaje.getAltura() + " M" + "\n";
      out += "Peso : " + personaje.getPeso() + " KG" + "\n";
      out += "Vida : " + personaje.getHP() + "\n";
      out += "Ataque : " + personaje.getAtaque() + "\n";
      out += "Defensa : " + personaje.getDefensa() + "\n";
      out += "Universo: " + personaje.getUniverso() + "\n\n";
    } else {
      out += "No hay datos de este Personaje." + "\n";
    }
    return out;
  }
}
