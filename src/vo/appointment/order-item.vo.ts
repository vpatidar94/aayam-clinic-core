import { ItemVo } from "./item.vo";

export interface OrderItemVo {
  item: ItemVo | null;
  qty: number; // Quantity

  note: string; //Special instructions, Extra instructions - List any special requests

  status: string | null; // OrderItemStatus - REFUND

  taxInclusive: boolean; // from ItemVo.taxInclusive
  priceBase: number; // from ItemVo.price

  tax: number; // total tax
  amount: number; // Amount = qty * price

  // Tax / GST
  igst: number;
  cgst: number;
  sgst: number;

  openItem: boolean;
  name: string;
}
