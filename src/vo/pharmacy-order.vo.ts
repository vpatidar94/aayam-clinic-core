import { OrderVo } from "./order.vo";

export interface PharmacyOrderVo extends OrderVo {
  bookingId: string // booking id if available
}

