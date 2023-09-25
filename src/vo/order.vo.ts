import { OrderItemVo } from "./appointment/order-item.vo";
import { TxVo } from "./appointment/tx.vo";

export interface OrderVo {
  _id: string;

  orgId: string;
  brId: string;
  user: string; // patient id 
  
  status: string; // OrderStatus - [PENDING, CONFIRMED, COMPLETED]

  txStatus: string; // OrderStatusTx - [UNPAID, PAID, PAID_PARTLY, VOID]
  items: Array<OrderItemVo>;
  tx: Array<TxVo>;
  txDateLast: Date; // used in report - Date of the last successful transaction - order date

  // GST
  igst: number;
  cgst: number;
  sgst: number;

  subTotal: number;
  tax: number; // total tax
  discount: number; // discount to the order -OR- CreditMemo Amount
  deliveryFee: number; // delivery fee
  serviceFee: number; // service charge / service fee
  discountCash: number; // ?
  totalDue: number;
  totalPaid: number;

  crtBy: string;
  created: Date;
  modified: Date;

  note: string;
}
