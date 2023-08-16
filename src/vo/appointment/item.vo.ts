import { UserVo } from "../auth";

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
  feeType: String;
  doctorFee: number,
  orgFee: number,
  status: String,
  del: Boolean,
  modBy:  String,
  crtBy:  String
  modified: String,
  created: String
}


export interface ItemPopulateVo extends ItemVo {
  user?: UserVo;
}