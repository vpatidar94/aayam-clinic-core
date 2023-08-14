import { UserBankDetailVo } from "./user-bank-detail.vo";
import { UserDeductionVo } from "./user-deduction.vo";
import { UserIncomeVo } from "./user-income.vo";

export interface UserAccountVo {
    _id: string;
    userId: string,
    salaryType: string,
    bankDetail: UserBankDetailVo,
    income: UserIncomeVo,
    deduction: UserDeductionVo
}
