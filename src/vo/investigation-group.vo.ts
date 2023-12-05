import { InvestigationCriteriaVo } from "./investigation-criteria.vo";

export interface InvestigationGroupVo {
    name: string;
    criteriaList: Array<InvestigationCriteriaVo>;
    gender: Array<string>;
    ageGroup: string;
}