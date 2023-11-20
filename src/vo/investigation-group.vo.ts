import { InvestigationCriteriaVo } from "./investigation-criteria.vo";

export interface InvestigationGroupVo {
    name: string;
    criteriaList: Array<InvestigationCriteriaVo>;
    geneder: Array<string>;
    ageGroup: string;
}