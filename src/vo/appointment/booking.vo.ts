import { UserVo } from "../auth";
import { OrderVo } from "../order.vo";
import { ObservationVo } from "./observation.vo";
import { OrderItemVo } from "./order-item.vo";
import { PrescriptionVo } from "./prescription.vo";
import { TxVo } from "./tx.vo";

export interface BookingVo extends OrderVo{

  no: string;
  patientNo: string;
  bookingDate: Date;
  shift: string; // EVENING, MORNING
  timeSlot: string;
  chargable: boolean;

  dr: string; // Doctor Id
  drExt: Array<string>;
  referedBy: string;
  complaint: Array<string>;
  diagnosis: Array<string>;

  type: string; // PATIENT, APPOINTMENT
  subType: string; // OPD, ADMISSION, INVESTIGATION, EMERGENCY
  departmentId: string;

  observation: ObservationVo,

  test: Array<string>;  // test suggested by doc

  prescription: Array<PrescriptionVo>;

  instruction: Array<string>;

  nextVisitDate: Date;

}

export interface BookingPopulateVo extends BookingVo {
  patient: UserVo;
  drDetail: UserVo;
}
