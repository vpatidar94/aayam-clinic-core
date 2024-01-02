import { InvestigationGroupVo } from "./investigation-group.vo";

export interface InvestigationParamVo {
    specimen: string;
    params: Array<InvestigationGroupVo>;
}