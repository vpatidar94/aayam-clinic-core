export class CurrencyUtility {

    public static getInLowestUnit(amount: number): number {
        return Math.round(amount * 100);
    }

    public static getInHigherUnit(amount: number): number {
        return amount / 100;
    }
}
