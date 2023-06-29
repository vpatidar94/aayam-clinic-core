
/**
 * MathService -
 */
export class MathUtility {


  /* ************************************ Public Methods ************************************ */
  public static round(value: number, precision: number): number {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  // Km to miles | Kilometers to miles converter - RapidTables.com
  // https://www.rapidtables.com/convert/length/km-to-mile.html
  //   Kilometers (km) to miles (mi) conversion calculator and how to convert.
  // Kilometers to Miles
  public static mToKm(value: number): number {
    return value / 1000;
  }

  public static kmToMi(value: number): number {
    return value / 1.60934;
  }

  public static miToKm(value: number): number {
    return value * 1.60934;
  }

  public static secToMin(value: number): number {
    return value / 60;
  }

  /* ************************************ Private Methods ************************************ */

}
