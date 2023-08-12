import { UserDeductionVo } from "./user-deduction.vo";
import { UserIncomeVo } from "./user-income.vo";

export interface UserAccountVo {
    _id: string;
    salaryType: string,
    income: UserIncomeVo,
    deduction: UserDeductionVo
}
