/* eslint-disable camelcase */
/* eslint-disable max-len */
import {cargarEfectividad, Efectividad, universos} from "./efectividades";
import {Fighter} from "./fighter";
/**
 * Clase Combat que permite pelear a dos personajes
 */
export class Combat {
  /**
   * Constructor de la clase Combat
   * @param first Primer personaje en pegar
   * @param second Segundo personaje en pegar
   */
  constructor(private first: Fighter,
      private second: Fighter) {
  }
  /**
   * Get del primer personaje
   * @returns Personaje
   */
  getFirst() {
    return this.first;
  }
  /**
   * Get del segundo personaje
   * @returns Personaje
   */
  getSecond() {
    return this.second;
  }
  /**
   * Set para cambiar el primer personaje
   * @param first Nuevo personaje
   */
  setFirst(first: Fighter) {
    this.first = first;
  }
  /**
   * Set para cambiar el segundo personaje
   * @param second Nuevo personaje
   */
  setSecond(second: Fighter) {
    this.second = second;
  }
  /**
   * Funcion para calcular el daño entre dos personajes
   * @param atacante Universo del atacante
   * @param ataque Ataque del atacante
   * @param defensor Universo del defensor
   * @param defensa Defensa del defensor
   * @returns Daño causado
   */
  private damage(atacante: universos, ataque: number, defensor: universos, defensa: number): number {
    let efectividades: Efectividad[] = [];
    efectividades = cargarEfectividad();
    let efectividad: number = 0;
    for (let i = 0; i < efectividades.length; i++) {
      if (efectividades[i].UniversoA === atacante && efectividades[i].UniversoD === defensor) {
        efectividad = efectividades[i].Efectividad;
        break;
      }
    }
    const damage: number = 50 * (ataque / defensa) * efectividad;
    return damage;
  }
  /**
   * Funcion que simula el combate entre dos personajes
   * @returns Narracion del combate
   */
  start(): string {
    let out: string = "";
    let hp_1 = this.first.getHP();
    let hp_2 = this.second.getHP();
    let damage: number = 0;
    out += "\n" + this.first.getNombre() + " VS " + this.second.getNombre() + "\n\n";
    out += this.first.getNombre() + ": " + this.first.getHP() + " HP" + " - Universo: " + this.first.getUniverso() + "\n";
    out += this.second.getNombre() + ": " + this.second.getHP() + " HP" + " - Universo: " + this.second.getUniverso() + "\n\n";
    while (true) {
      out += this.first.getNombre() + " ataca a " + this.second.getNombre() + "\n";
      out += this.first.getFrase() + "\n";
      damage = this.damage(this.first.getUniverso(), this.first.getAtaque(), this.second.getUniverso(), this.second.getDefensa());
      hp_2 -= damage;
      out += this.second.getNombre() + " sufrio un daño de : " + damage + " -> HP: " + hp_2 + "\n\n";
      if (hp_2 <= 0) {
        break;
      }
      out += this.second.getNombre() + " ataca a " + this.first.getNombre() + "\n";
      out += this.second.getFrase() + "\n";
      damage = this.damage(this.second.getUniverso(), this.second.getAtaque(), this.first.getUniverso(), this.first.getDefensa());
      hp_1 -= damage;
      out += this.first.getNombre() + " sufrio un daño de : " + damage + " -> HP: " + hp_1 + "\n\n";
      if (hp_1 <= 0) {
        break;
      }
    }
    out += "\nFin del combate\n";
    if (hp_1 > 0) {
      out += this.first.getNombre() + " gana la batalla!";
    } else {
      out += this.second.getNombre() + " gana la batalla!";
    }
    return out;
  }
}
