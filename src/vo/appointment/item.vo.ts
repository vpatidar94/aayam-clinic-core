import { UserVo } from "../auth";

export interface ItemVo {
  _id: string;

  org: string;
  br: string;

  name: string;
  description: string;

  user: string | UserVo; // Docter id null if no docter

  price: number; // Retail Selling Price (Unit Price)
  taxInclusive: boolean; // if true Price is tax inclusive

  igst: number;
  cgst: number;
  sgst: number;

  active: boolean;
}
