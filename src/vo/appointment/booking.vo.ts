import { UserVo } from "../auth";
import { ObservationVo } from "./observation.vo";
import { OrderItemVo } from "./order-item.vo";
import { PrescriptionVo } from "./prescription.vo";
import { TxVo } from "./tx.vo";

export interface BookingVo {
  _id: string;

  orgId: string;
  brId: string;
  userId: string | UserVo; // patient

  no: string;
  bookingDate: Date;

  chargable: boolean;
  dr: string | UserVo; // Doctor Id
  referedBy: string;

  status: string; // OrderStatus - [HOLD, WIP, DELETE]
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

  crtBy: string;
  created: Date;
  modified: Date;

  note: string;

  observation: ObservationVo,

  test: Array<string>;  // test suggested by doc

  prescription: Array<PrescriptionVo>;

  instruction: Array<string>;

}
