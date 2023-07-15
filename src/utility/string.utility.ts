/**
 * StringUtility -
 */
import { UserVo } from '../vo/auth';
import { FnUtility } from './fn.utility';

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

    public static removeWhitespace(val: string) {
        // .replace(/ /g,'') -OR- .replace(/\s/g,'')
        return val.replace(/ /g, '');
    }

    public static usCurrencyFormat(val: string): string {
        const usd = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return usd;
    }

    public static twoNumAfterDecimalV2(value: number): string {
        const with2Decimals = value?.toString()?.match(/^-?\d+(?:\.\d{0,2})?/);
        if (with2Decimals) {
            return with2Decimals[0];
        }
        return '';
    }

    public static getFullName(user: UserVo): string {
        if (FnUtility.isEmpty(user)) {
            return '';
        }
        let name: string | null | undefined = '';
        if (!FnUtility.isEmpty(user.nameF)) {
            name = user.nameF;
        }
        if (!FnUtility.isEmpty(user.nameM)) {
            name = name + ' ' + user.nameM;
        }
        if (!FnUtility.isEmpty(user.nameL)) {
            name = name + ' ' + user.nameL;
        }
        return name ?? '';
    }

    public static trimAndLowercase(str: string): string {
        return str.trim().toLocaleLowerCase();
    }

    /* ************************************ Private Methods ************************************ */

}
