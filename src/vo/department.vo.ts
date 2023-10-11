
//  Department of a  :- (Organization / Enterprise / Merchant / Business / Company / Client)
export interface DepartmentVo {
    _id: string; // departmentId

    orgId: string; // organization - department associated with
    brId: string; // associated branch of the organization

    type: string; // PATIENT_RELATED, NON_PATIENT_RELATED

    // Department Information
    name: string;
    code: string;
    status: string | null | undefined; // affiliation/status - ACTIVE/INACTIVE (by org)
    del: boolean;
    modBy: string | null | undefined;
    crtBy: string | null | undefined;
    modified: Date;
    created: Date;
}