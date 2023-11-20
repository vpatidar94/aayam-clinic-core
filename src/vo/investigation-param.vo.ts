import { InvestigationGroupVo } from "./investigation-group.vo";

export interface InvestigationParamVo {
    _id: string;

    orgId: string;
    brId: string;

    testCode: string;

    testName: string;
    departmentId: string;
    specimen: string;
    charge: number;

    params: Array<InvestigationGroupVo>;
}