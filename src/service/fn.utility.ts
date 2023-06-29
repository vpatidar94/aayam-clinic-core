/**
 * MathService -
 */
export class FnUtility {
  /*


      // for (var key in p) {
      Object.keys(appCacheVos).forEach((key) => { // ECMAScript 5

      ECMAScript 6 adds for...of
      for (const key of Object.keys(obj)) {
        console.log(key, obj[key]);
      }
      ECMAScript 8
      Object.entries(appCacheVos).forEach(([key, value]) => {
        console.log(key, value)
      });

   */

  /* ************************************ Public Methods ************************************ */

  // *************** Converting a string Map to and from an object ***************
  public static strMapToObj(strMap: Map<any, any>): any {
    let obj = Object.create(null);
    // for (let [k,v] of strMap) {
    // We don’t escape the key '__proto__'
    // which can cause problems on older engines
    // obj[k] = v;
    // }
    // Object.keys(strMap).forEach((k) => {
    //   obj[k] = strMap.get(k);
    // });

    strMap.forEach((v, k) => {
      obj[k] = v;
    });
    return obj;
  }

  public static objToStrMap(obj: any): Map<any, any> {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

  // *************** The conversion to and from JSON ***************
  public static strMapToJson(strMap: Map<any, any>): string {
    return JSON.stringify(FnUtility.strMapToObj(strMap));
  }

  public static jsonToStrMap(jsonStr: string): Map<any, any> {
    return FnUtility.objToStrMap(JSON.parse(jsonStr));
  }

  /**
   * Remove Elements From A JavaScript Array
   * Array.filter to return elements not matching a value
   */
  public static arrayRemove(arr: Array<any>, value: any) {
    return arr.filter((ele) => {
      return ele != value;
    });
  }

}