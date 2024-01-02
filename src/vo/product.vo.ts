export interface ProductVo {
  _id: string;
  orgId: string;
  brId: string;
  name: string;
  code: string;
  drug: string;
  productType: string;
  company: string;
  packagingType: string;
  price: number;
  qtyPerPackage: number;
  pricePerPackage: number;
  purchaseDate: Date;
  expirtyDate: Date;
  status: string;
  del: boolean;
  modBy: Date;
  crtBy: Date;
  modified: Date;
  created: Date;
}
