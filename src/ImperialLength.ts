// pulgadas, pies, yardas y millas 
/**
 * Proporciona información sobre unidades de longitud. Trabaja con millas como
 * unidad base
 * @class
 */
export class ImperialLength {
  private _value: number;
  /**
   * Constructor, almacena un valor en millas
   * @param value Número que representa una longitud en millas
   */
  constructor (value: number) {
    if (value < 0) { throw("Invalid Argument"); }
    else {
      this._value = value;
    }
  }

  /**
   * Getter del valor almacenado
   * @returns Valor almacenado en millas
   */
  public getMillas(): number { return this._value; }
  /**
   * Setter del valor almacenado
   * @param value Número que representa una longitud en millas
   */
  public setMillas(value: number) { this._value = value; }
  
  /**
   * Getter del valor convertido en Pulgadas
   * @returns Valor almacenado en Pulgadas
   */
  public getPulgadas(): number | undefined {
    return this.millasToPulgadas(this._value);
  }
  
  /**
   * Establece el valor almacenado a un valor en millas dado por una conversión de pulgadas
   * @param value  Una longitud en pulgadas
   */
  public setPulgadas(value: number) {
    if(!(typeof(this.pulgadasToMillas(value)) === undefined)) {
      this._value = value;
    }
  }
  
  /**
   * Getter del valor convertido en Pies
   * @returns Valor almacenado en Pies
   */
  public getPies(): number | undefined { return this.millasToPies(this._value); }
  /**
   * Establece el valor almacenado a un valor en millas dado por una conversión de pies
   * @param value una longitud en pies
   */
  public setPies(value: number) { 
    if(!(typeof(this.pulgadasToMillas(value)) === undefined)) {
      this._value = value;
    }
  }

  /**
   * Getter del valor convertido en Yardas
   * @returns Valor almacenado en Yardas
   */
  public getYards(): number | undefined { return this.millasToYards(this._value); }
  /**
   * Establece el valor almacenado a un valor en millas dado por una conversión de pulgadas
   * @param value una longitud en Yardas
   */
  public setYards(value: number) { 
    if(!(typeof(this.yardsToMillas(value)) === undefined)) {
      this._value = value;
    }
  }
  
  /**
   * Función que convierte de millas a Pulgadas
   * @param value Un valor en millas
   * @returns El valor convertido a Pulgadas
   */
  private millasToPulgadas(value: number): number | undefined {
    if (value < 0) { return undefined }
    let result: number = value * 63360;
    return result;
  } 
  
  /**
   * Función que convierte de Pulgadas a millas
   * @param value Un valor en pulgadas
   * @returns El valor convertido a Millas
   */
  private pulgadasToMillas(value: number): number | undefined {
    if (value < 0) { return undefined }
    let result: number = value * (1 / 6336);
    return result;
  } 
  
  /**
   * Función que convierte de millas a Pies
   * @param value Un valor en millas
   * @returns El valor convertido a Pies
   */
  private millasToPies(value: number): number | undefined {
    if (value < 0) { return undefined }
    let result: number = value * 5280;
    return result;
  } 
  
  /**
   * Función que convierte de Pies a Millas
   * @param value Un valor en Pies
   * @returns El valor convertido a Millas
   */
  private piesToMillas(value: number): number | undefined {
    if (value < 0) { return undefined }
    let result: number = value * (1 / 5280);
    return result;
  } 
  
  /**
   * Función que convierte de millas a Yards
   * @param value Un valor en millas
   * @returns El valor convertido a Yards
   */
  private millasToYards(value: number): number | undefined {
    if (value < 0) { return undefined }
    let result: number = value * 1760;
    return result;
  } 
  
  /**
   * Función que convierte de Yards a Millas
   * @param value Un valor en yards
   * @returns El valor convertido a Millas
   */
  private yardsToMillas(value: number): number | undefined {
    if (value < 0) { return undefined }
    let result: number = value * (1 / 1760);
    return result;
  } 
}