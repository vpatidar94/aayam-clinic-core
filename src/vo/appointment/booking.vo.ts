import { UserVo } from "../auth";
import { OrderVo } from "../order.vo";
import { ObservationVo } from "./observation.vo";
import { OrderItemVo } from "./order-item.vo";
import { PrescriptionVo } from "./prescription.vo";
import { TxVo } from "./tx.vo";

export interface BookingVo extends OrderVo {
  _id: string;

  orgId: string;
  brId: string;
  user: string; // patient id 

  no: string;
  patientNo: string;

  bookingDate: Date;
  shift: string; // EVENING, MORNING
  timeSlot: string;

  chargable: boolean;

  dr: Array<string>; // Doctor Id
  drExt: Array<string>;
  referedBy: string;
  complaint: Array<string>;
  diagnosis: Array<string>;

  type: string; // PATIENT, APPOINTMENT
  subType: string; // OPD, ADMISSION, INVESTIGATION, EMERGENCY


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

  observation: ObservationVo,

  test: Array<string>;  // test suggested by doc

  prescription: Array<PrescriptionVo>;

  instruction: Array<string>;

  nextVisitDate: Date;

}

export interface BookingPopulateVo extends BookingVo {
  patient: UserVo;
  drList: Array<UserVo>;
}
