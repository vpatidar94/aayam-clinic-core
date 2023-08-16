import { BookingVo, ItemVo, OrderItemVo } from "../vo";

export class BookingUtility {

    /* ************************************ Static ************************************ */
    /* ************************************ Booking Service Item ********************************* */
    public static applyDiscountAndCalPrice(booking: BookingVo): void {
        // Step 1: calc Sub Total
        const subTotal = this.getSubTotal(booking);
        booking.subTotal = subTotal;
        // Step 2: calc discount
        // Step 3: calc Tax
        booking.totalDue = subTotal + (booking.tax ?? 0) - (booking.discount ?? 0);
    }

    public static updateBookingItem(itemAdded: boolean, booking: BookingVo, item: ItemVo, qty: number, note: string): void {
        let indexMatchItem = -1;
        if (booking?.items?.length > 0) {
            indexMatchItem = booking?.items?.findIndex((row: OrderItemVo) => !row?.openItem && row.item?._id === item._id);
        }
        if (itemAdded) {
            if (indexMatchItem < 0) {
                // new item
                const orderItem = {} as OrderItemVo;
                orderItem.item = item;
                orderItem.qty = qty;
                orderItem.priceBase = item?.fee ?? 0; // base price copied to orderItem base price
                orderItem.amount = orderItem.priceBase * orderItem.qty;
                orderItem.note = note;
                booking?.items?.push(orderItem);
            } else {
                const orderItem = booking?.items[indexMatchItem];
                orderItem.qty = qty;
                orderItem.amount = orderItem.priceBase * orderItem.qty;
                orderItem.note = note;
                booking.items[indexMatchItem] = orderItem;
            }
        } else {
            // item removed
            if (indexMatchItem > 0) {
                booking.items.splice(indexMatchItem);
            }
        }
    }

    public static updateBookingItemAndCalcTotal(itemAdded: boolean, booking: BookingVo, item: ItemVo, qty: number, note: string): void {
        this.updateBookingItem(itemAdded, booking, item, qty, note);
        this.applyDiscountAndCalPrice(booking);
    }

    /* ************************************ Private Methods ************************************ */
    public static getSubTotal(booking: BookingVo): number {
        let subTotal = 0;
        booking.items?.forEach(it => {
            subTotal += it.priceBase * it.qty;
        });
        return subTotal;
    }
}
