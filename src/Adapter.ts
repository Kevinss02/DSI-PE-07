import {ImperialLength} from "./ImperialLength"

/**
 * Classe que sigue el patrón Adapter para convertir unides imperiales a métricas
 * @class
 */
export class MetricLengthAdapter {
    /**
     * El constructor almacena un objeto ImperiaLength, será necesario las funciones de este objeto
     * @param imperialLength Un objeto ImperialLength
     */
    constructor(private imperialLength: ImperialLength) {}
    
    /**
     * Función que convierte el valor en millas del objeto ImperialLength a centímetros
     * @returns El valor en millas del objeto ImperialLength convertido a centímetros
     */
    public getCentimeters(): number | undefined {
      let val: number | undefined = this.imperialLength.getPulgadas();
      if (typeof(val === undefined)) { return undefined;}
      else return val * 2.54;
    }
    
    /**
     * Función que convierte el valor en millas del objeto ImperialLength a Metros
     * @returns El valor en millas del objeto ImperialLength convertido a Metros
     */
    public getMeters(): number {
      return this.imperialLength.getPies() * 0.3048;
    }
    
    /**
     * Función que convierte el valor en millas del objeto ImperialLength a Kilómetros
     * @returns El valor en millas del objeto ImperialLength convertido a Kilómetros
     */
    public getKilometers(): number {
      return this.imperialLength.getMillas() * 1.60934;
    }
  }
  