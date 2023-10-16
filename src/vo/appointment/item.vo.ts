import { UserVo } from "../auth";
import { PercentFlatVo } from "../percent-flat.vo";

export interface ItemVo {
  _id: string;
  orgId: string;
  brId: string;
  departmentId: string;
  serviceTypeId: string;
  associatedDoctorId: string;
  name: string;
  code: string;
  fee: number;
  feeType: PercentFlatVo;
  doctorFee: number,
  orgFee: number,
  status: string,
  del: Boolean,
  modBy: string,
  crtBy: string
  modified: string,
  created: string
}


export interface ItemPopulateVo extends ItemVo {
  user?: UserVo;
}