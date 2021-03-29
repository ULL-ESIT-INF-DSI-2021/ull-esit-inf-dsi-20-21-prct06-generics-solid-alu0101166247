##### José Daniel Fuentes Marra alu0101166247@ull.edu.es
# Informe de la práctica 6
## Clases e interfaces genéricas. Principios SOLID

## Introducción
 
En esta práctica llevaremos a cabo una serie de ejercicios que serán útiles para entender bien y utilizar las clases e interfaces genéricas.
## Objetivo
 
El objetivo de esta práctica es entender y utilizar de manera correcta las interfaces genéricas y las clases genéricas y abstractas en TypeScript que necesitaremos para el resto de la asignatura y nuestra vida profesional.

## Contenido 

### Ejercicios

A continuación se presentarán una serie de ejercicios que conforman la práctica 6 y se explicara como fueron programadas las soluciones para lograr el objetivo de cada ejercicio.

Esta practica la he realizado implementando pruebas con mocha y chai, también se utiliza nyc y coveralls por lo que simplemente puede ejecutar >npm run coverage y ver los resultados de todas las pruebas de cada ejercicio mas el % de uso de código de cada ejercicio.

Aquí un enlace a la herramienta Coveralls usada para esta practica:
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101166247/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101166247?branch=master)

#### Ejercicio 1 - El combate definitivo

Este ejercicio consiste en extender el ejercicio 1 de la practica 5 y básicamente se pide crear una clase abstracta Fighter que permita ser usada para crear mas clases que representen personajes del universo de Marvel, Pokemon, DC, Dragon Ball y Star Wars. También podrán ser almacenados en una especie de enciclopedia para consultar sus características y podrán luchar entre ellos.

Estas serian las clases que permiten llevar a cabo todo lo que se pide en el ejercicio: 

Clase Fighter:
```ts
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
```

Clase Combat:
```ts
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
```

Clase universedex:

```ts
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
```

Clase pokemon:

```ts
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
```

Clase StarWars

```ts
/**
 * Clase StarWars para personajes del universo de StarWars
 */
export class StarWars extends Fighter {
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
      private readonly universo: universos = universos.StarWars) {
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
```

Clase Marvel:

```ts
/**
 * Clase Marvel para personajes del universo de Marvel
 */
export class Marvel extends Fighter {
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
      private readonly universo: universos = universos.Marvel) {
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
```

Clase DC:

```ts
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
```

Clase DragonBall:

```ts
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
```

Como se puede observar las clases de los personajes son casi iguales, solo la de pokemon tiene un atributo diferente que seria para el elemento del pokemon y lo que cambia en cada una seria su universo.

#### Ejercicio 2 - Conversor de unidades

Para este ejercicio se pide una interfaz genérica que permita realizar conversiones entre distintos sistemas de unidades.

Esta seria la interfaz isConvertible:

```ts
/**
 * Interfaz generica que permite realizar conversiones entre sistemas
 */
export interface isConvertible<T> {
    unit: number;
    fromTo: T;
    /**
     * Funcion que convierte las unidades
     * @param unit Unidad a convertir
     * @param fromTo Parametro para especificar de que unidad a que unidad
     */
    convert(unit: number, fromTo: T): string;
}
```

De esta manera se puede usar para implementarla en las distintas clases de cada sistema de unidad, a continuación se mostraran las clases de cada sistema de unidad.

Clase fuerza:

```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum forceUnits {NewtonToKilopondio, KilopondioToNewton}
/**
 * Clase para convertir fuerzas
 */
export class Fuerza implements isConvertible<forceUnits> {
    unit: number;
    fromTo: forceUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = forceUnits.NewtonToKilopondio;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: forceUnits): string {
      let out:string = "";
      if (fromTo === forceUnits.NewtonToKilopondio) {
        out += unit.toString() + " Newtons -> ";
        out += unit * 0.1019716213 + " Kilopondios";
        return out;
      } else {
        out += unit.toString() + " Kilopondios -> ";
        out += unit * 9.80665 + " Newtons";
        return out;
      }
    }
}
```

Clase longitud:

```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum lengthUnits {MetrosToCentimetros, CentimetrosToMetros}
/**
 * Clase para convertir longitudes
 */
export class Longitud implements isConvertible<lengthUnits> {
    unit: number;
    fromTo: lengthUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = lengthUnits.MetrosToCentimetros;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: lengthUnits): string {
      let out:string = "";
      if (fromTo === lengthUnits.MetrosToCentimetros) {
        out += unit.toString() + " Metros -> ";
        out += unit * 100 + " Centimetros";
        return out;
      } else {
        out += unit.toString() + " Centimetros -> ";
        out += unit / 100 + " Metros";
        return out;
      }
    }
}
```

Clase masa:

```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum massUnits {KilogramosToGramos, GramosToKilogramos}
/**
 * Clase para convertir masas
 */
export class Masa implements isConvertible<massUnits> {
    unit: number;
    fromTo: massUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = massUnits.KilogramosToGramos;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: massUnits): string {
      let out:string = "";
      if (fromTo === massUnits.KilogramosToGramos) {
        out += unit.toString() + " Kilogramos -> ";
        out += unit * 1000 + " Gramos";
        return out;
      } else {
        out += unit.toString() + " Gramos -> ";
        out += unit / 1000 + " Kilogramos";
        return out;
      }
    }
}
```

Clase temperatura:

```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum temperatureUnits {CelsiusToFahrenheit, FahrenheitToCelsius}
/**
 * Clase para convertir temperaturas
 */
export class Temperatura implements isConvertible<temperatureUnits> {
    unit: number;
    fromTo: temperatureUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = temperatureUnits.CelsiusToFahrenheit;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: temperatureUnits): string {
      let out:string = "";
      if (fromTo === temperatureUnits.CelsiusToFahrenheit) {
        out += unit.toString() + " °C -> ";
        out += (unit * 9/5) + 32 + " °F";
        return out;
      } else {
        out += unit.toString() + " °F -> ";
        out += (unit - 32) * 5/9 + " °C";
        return out;
      }
    }
}
```

Clase tiempo:

```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum timeUnits {MinutosToSegundos, SegundosToMinutos}
/**
 * Clase para convertir tiempos
 */
export class Tiempo implements isConvertible<timeUnits> {
    unit: number;
    fromTo: timeUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = timeUnits.SegundosToMinutos;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: timeUnits): string {
      let out:string = "";
      if (fromTo === timeUnits.SegundosToMinutos) {
        out += unit.toString() + " Segundos -> ";
        out += unit / 60 + " Minutos";
        return out;
      } else {
        out += unit.toString() + " Minutos -> ";
        out += unit * 60 + " Segundos";
        return out;
      }
    }
}
```

Clase velocidad:

```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum speedUnits {KMpHToMph, MpHToKMpH}
/**
 * Clase para convertir velocidades
 */
export class Velocidad implements isConvertible<speedUnits> {
    unit: number;
    fromTo: speedUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = speedUnits.KMpHToMph;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: speedUnits): string {
      let out:string = "";
      if (fromTo === speedUnits.KMpHToMph) {
        out += unit.toString() + " KMpH -> ";
        out += unit * 0.621371 + " MpH";
        return out;
      } else {
        out += unit.toString() + " MpH -> ";
        out += unit * 1.60934 + " KMpH";
        return out;
      }
    }
}
```

Clase volumen:
 
 ```ts
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum volumeUnits {LitrosToMililitros, MililitrosToLitros}
/**
 * Clase para convertir volumenes
 */
export class Volumen implements isConvertible<volumeUnits> {
    unit: number;
    fromTo: volumeUnits;
    /**
     * Constructor de la clase
     */
    constructor() {
      this.unit = 0;
      this.fromTo = volumeUnits.LitrosToMililitros;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: volumeUnits): string {
      let out:string = "";
      if (fromTo === volumeUnits.LitrosToMililitros) {
        out += unit.toString() + " Litros -> ";
        out += unit * 1000 + " Mililitros";
        return out;
      } else {
        out += unit.toString() + " Mililitros -> ";
        out += unit / 1000 + " Litros";
        return out;
      }
    }
}
 ```

 Como se puede observar son casi iguales las clases excepto por la funcion convert que tienen los diferentes calculos para cada caso en particular y tambien cabe destacar que cada clase implementa un enum que representa las conversiones que se pueden realizar.

#### Ejercicio 3 - DSIflix

Para este ejercicio se pide diseñar un modelo que permita representar peliculas, series y documentales mediante una interfaz generica que trate de especificar propiedades y metodos con los que deberia contar una coleccion de lo antes mencionado.

La intefaz Streamable seria:

```ts
/**
 * Interfaz generica para crear una coleccion de items streamables
 */
export interface Streamable<T> {
    /**
     * Funcion para agregar items a la coleccion
     * @param newItem Nuevo item
     */
    addItem(newItem: T): void;
    /**
     * Funcion para obtener los items de la coleccion
     */
    getItems(): T[];
    /**
     * Funcion para obtener el numero de items en la coleccion
     */
    getNumberOfItems(): number;
}
```

Luego tenemos otra interfaz que seria para implementar la funcion de buscar:

```ts
/**
 * Enumerable con los parametros posibles para las busquedas
 */
export enum search {Año, Titulo, Clasificacion}
/**
 * Interfaz generica que implementa la funcion searchBy
 */
export interface SearchableItem<T> extends Streamable<T> {
    /**
     * Funcion para buscar items
     * @param by Parametro de busqueda
     */
    searchBy(by: search, equal: T): T[];
}
```

Ahora tenemos la clase abstracta que permite implementar las dos interfaces anteriores:

```ts
/**
 * Clase abstracta basic
 */
export abstract class BasicStreamableCollection<T> implements SearchableItem<T> {
  /**
   * Constructor de la clase abstracta basic
   * @param items Arreglo de items
   */
  constructor(protected items: T[]) { }
  /**
   * Funcion abstracta para buscar
   * @param by Parametro de busqueda
   */
  abstract searchBy(by: search, equal: T): T[];
  /**
   * Funcion para agregar items
   * @param newItem Nuevo item
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  /**
   * Funcion para obtener todos los items de la coleccion
   * @returns Arreglo con todos los items
   */
  getItems(): T[] {
    return this.items;
  }
  /**
   * Funcion para obtener el numero de items de la coleccion
   * @returns Numero de items
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
}
```

Y para terminar tenemos las clases para peliculas, series y documentales que utilizan la estructura anterior.

Clase Series:

```ts
/**
 * Tipo de dato para representar caracteristicas de una serie
 */
export type serie = {
    titulo: string;
    año: number;
    temporadas: number;
    episodios: number;
    genero: string;
    clasificacion: string;
}
/**
 * Clase para representar series
 */
export class Series extends BasicStreamableCollection<serie | number | string> {
  /**
   * Constructor de la clase
   * @param items Arreglo de series
   */
  constructor(protected items: serie[]) {
    super(items);
  }
  /**
   * Funcion de busqueda segun un parametro de entrada
   * @param by Tipo de busqueda
   * @param equal Palabra o numero buscado
   * @returns Arreglo con el resultado de la busqueda
   */
  searchBy(by: search, equal: number | string): serie[] {
    const out: serie[] = [];
    if (by === search.Año) {
      this.items.forEach((item) => {
        if (equal === item.año) {
          out.push(item);
        }
      });
    }
    if (by === search.Titulo) {
      this.items.forEach((item) => {
        if (equal === item.titulo) {
          out.push(item);
        }
      });
    }
    if (by === search.Clasificacion) {
      this.items.forEach((item) => {
        if (equal === item.clasificacion) {
          out.push(item);
        }
      });
    }
    return out;
  }
}
```

Clase Peliculas:

```ts
/**
 * Tipo de dato para representar caracteristicas de una pelicula
 */
export type pelicula = {
    titulo: string;
    año: number;
    duracion: number;
    genero: string;
    clasificacion: string;
}
/**
 * Clase para representar peliculas
 */
export class Peliculas extends BasicStreamableCollection<pelicula | string | number> {
  /**
   * Constructor de la clase
   * @param items Arreglo de peliculas
   */
  constructor(protected items: pelicula[]) {
    super(items);
  }
  /**
   * Funcion de busqueda segun un parametro de entrada
   * @param by Tipo de busqueda
   * @param equal Palabra o numero buscado
   * @returns Arreglo con el resultado de la busqueda
   */
  searchBy(by: search, equal: number | string): pelicula[] {
    const out: pelicula[] = [];
    if (by === search.Año) {
      this.items.forEach((item) => {
        if (equal === item.año) {
          out.push(item);
        }
      });
    }
    if (by === search.Titulo) {
      this.items.forEach((item) => {
        if (equal === item.titulo) {
          out.push(item);
        }
      });
    }
    if (by === search.Clasificacion) {
      this.items.forEach((item) => {
        if (equal === item.clasificacion) {
          out.push(item);
        }
      });
    }
    return out;
  }
}
```

Clase Documentales:

```ts
/**
 * Tipo de dato para representar caracteristicas de un documental
 */
export type documental = {
    titulo: string;
    año: number;
    duracion: number;
    genero: string;
    clasificacion: string;
}
/**
 * Clase para representar documentales
 */
export class Documentales extends BasicStreamableCollection<documental | number | string> {
  /**
   * Constructor de la clase
   * @param items Arreglo de documentales
   */
  constructor(protected items: documental[]) {
    super(items);
  }
  /**
   * Funcion de busqueda segun un parametro de entrada
   * @param by Tipo de busqueda
   * @param equal Palabra o numero buscado
   * @returns Arreglo con el resultado de la busqueda
   */
  searchBy(by: search, equal: number | string): documental[] {
    const out: documental[] = [];
    if (by === search.Año) {
      this.items.forEach((item) => {
        if (equal === item.año) {
          out.push(item);
        }
      });
    }
    if (by === search.Titulo) {
      this.items.forEach((item) => {
        if (equal === item.titulo) {
          out.push(item);
        }
      });
    }
    if (by === search.Clasificacion) {
      this.items.forEach((item) => {
        if (equal === item.clasificacion) {
          out.push(item);
        }
      });
    }
    return out;
  }
}
```

## Conclusión
 
Para concluir pienso que estos ejercicios ayudan a entender como funcionan las clases genericas y abstractas asi como las interfaces genericas en TypeScript, se hace mucho mas fácil entender un problema que a priori parece complicado pero dividiendo en clases e interfaces se consigue un mejor resultado y una estructura y un código mas robusto.
 
## Bibliografía

* [Guión de la Práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)
* [Instanbul](https://istanbul.js.org/)
* [Coveralls](https://coveralls.io/)