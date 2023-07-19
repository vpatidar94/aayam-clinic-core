/**
 * TxCust >> [txId] >> tx detail
 */
export interface TxVo {
  id: string;

  orgId: string | null | undefined;
  brId: string | null | undefined;

  deviceId: string | null | undefined;
  registerId: string | null | undefined;
  custId: string | null | undefined;

  note: string | null | undefined; // transaction detail - description - remarks - note

  //    txRefId: string | null | undefined; // invoiceId -OR- orderId -OR- bookingId
  //    tenderType: string | null | undefined; // "ALL", "CREDIT", "DEBIT", "CHECK", "EBT_FOODSTAMP", "EBT_CASHBENEFIT", "GIFT", "LOYALTY", "CASH", "EBT", "FLEET"
  //    transType: string | null | undefined; // "UNKNOWN", "AUTH", "SALE", "RETURN", "VOID", "POSTAUTH", "FORCEAUTH", "CAPTURE", "REPEATSALE", "CAPTUREALL", "ADJUST", "INQUIRY", "ACTIVATE", "DEACTIVATE", "RELOAD", "VOID SALE", "VOID RETURN", "VOID AUTH", "VOID POSTAUTH", "VOID FORCEAUTH", "VOID WITHDRAWAL", "REVERSAL", "WITHDRAWAL", "ISSUE", "CASHOUT", "REPLACE", "MERGE", "REPORTLOST", "REDEEM", "STATUS_CHECK", "SETUP", "INIT", "VERIFY", "REACTIVATE", "FORCED ISSUE", "FORCED ADD", "UNLOAD", "RENEW", "TOKENIZE", "GETCONVERTDETAIL", "CONVERT", "INCREMENTALAUTH", "BALANCEWITHLOCK", "REDEMPTIONWITHUNLOCK", "REWARDS", "REENTER"
  //    txMode: string | null | undefined; // Channel TransactionTenderType - paymentMethod CARD_NOT_PRESENT, CARD_PRESENT, CH - CASH, CQ - CHEQUE

  orderId: string | null | undefined;

  txTenderType: string | null | undefined; // TransactionTenderType
  txType: string | null | undefined; // TransactionType,
  txOrigin: string | null | undefined; // TransactionOrigin - POS, OOS
  txProcessor: string | null | undefined; // TransactionProcessor - PAX, PAYNT, STRIPE, DD
  txStatus: string | null | undefined; // TransactionStatus - SUCCESS, FAIL, TIME_OUT

  //    paymentIntentId: string | null | undefined; // Stripe pi_xxxxxxxx
  //    stripeAccount: string | null | undefined; // Stripe express account id - org.stripeAccount

  /* ************************************ gateway response ************************************ */
  gatewayResId: string | null | undefined; // GatewayResStripeVo.id STRIPE, GatewayResPaxVo.id PAX, PAYNT,
  gatewayRes: any;
  authCode: string | null | undefined;
  cardType: string | null | undefined; // brand network
  last4: string | null | undefined;
  refNum: string | null | undefined;
  resultCode: string | null | undefined;
  signData: string | null | undefined;
  cardHolderName: string | null | undefined;
  /**
   * for txType = VOID
   * amount = Sale amount
   * amountApproved = same or less approved by gateway
   *
   * for txType = RETURN
   * amount = return amount
   * amountApproved = same or less approved by gateway
   *
   * for txType = ADJUST
   * amount = Tip Amount only
   * amountApproved = Tip Amount + Sale Amount
   */
  amount: number | null | undefined; // amount requested
  amountApproved: number | null | undefined;
  serviceCharge: number | null | undefined; // service charge / service fee on amountApproved
  // status: string | null | undefined; //txStatus
  /*
    fee: number | null | undefined; //applicationFeeAmount
    expMonth: string | null | undefined;
    expYear: string | null | undefined; //expirationDate: string | null | undefined;
    cardHolderName: string | null | undefined;
    cvv: string | null | undefined; //cvvVerificationCode

    amountApproved: number | null | undefined;
    amountReceived: number | null | undefined;
    amountCaptured: number | null | undefined;
    amountRefunded: number | null | undefined;
     */

  /* ************************************ calc at server-side ************************************ */

  /**
   * ac = branchId-userId // composite key (branch id, user id)
   * ac = account issued by org
   */
  ac: string | null | undefined;
  date: Date;

  // Audit
  //    crtUser: UserPartialVo? = null
  crtBy: string | null | undefined; // paidBy either same user or employee or friend
  created: Date;
}
