import { UserVo } from "../auth";

export interface ItemVo {
  _id: string;

  orgId: string;
  brId: string;

  name: string;
  description: string;

  userId: string | UserVo; // Docter id null if no docter

  price: number; // Retail Selling Price (Unit Price)
  taxInclusive: boolean; // if true Price is tax inclusive

  igst: number;
  cgst: number;
  sgst: number;

  active: boolean;
}


export interface ItemPopulateVo extends ItemVo {
  user?: UserVo;
}