export interface ServiceTypeVo {
    _id: string; // departmentId

    orgId: string; // organization - department associated with
    brId: string; // associated branch of the organization
    departmentId: string; // associated department of the organization

    // ServiceType Information
    name: string;
    code: string;
    doctorAssociated : boolean,
    status: string | null | undefined; // affiliation/status - ACTIVE/INACTIVE (by org)
    del: boolean;
    modBy: string | null | undefined;
    crtBy: string | null | undefined;
    modified: Date;
    created: Date;
}