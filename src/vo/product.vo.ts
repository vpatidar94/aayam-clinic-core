export interface ProductVo {
  orgId: string;
  brId: string;
  name: string;
  code: string;
  drug: string;
  productType: string;
  company: string;
  price: number;
  qtyPerStrip: number;
  pricePerStrip: number;
  purchaseDate: Date;
  expirtyDate: Date;
  status: string;
  del: boolean;
  modBy: Date;
  crtBy: Date;
  modified: Date;
  created: Date;
}
