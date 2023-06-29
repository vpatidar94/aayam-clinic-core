/**
 * StringUtility -
 */
export class StringUtility {


  /* ************************************ Public Methods ************************************ */
  public static concat(...arr: string[]): string {
    let sRet = '';
    if (arr) {
      arr.forEach(str => {
        if (str) {
          sRet += ' ' + str.trim();
        }
      });
    }
    return sRet.trim();
  }

  /* ************************************ Private Methods ************************************ */

}
