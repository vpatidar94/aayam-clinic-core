import { DepartmentVo } from "../vo/department.vo";

export interface UserTypeVo {
    _id: string; // usertype id

    orgId: string; // organization - department associated with
    brId: string; // associated branch of the organization
    departmentId: string; // associalted department of org
    
    // USER TYPE Information
    name: string;
    code: string;
    status: string | null | undefined; // affiliation/status - ACTIVE/INACTIVE
    del: boolean;
    modBy: string | null | undefined;
    crtBy: string | null | undefined;
    modified: Date;
    created: Date;
}

export interface UserTypePopulateVo extends UserTypeVo {
    Department?: DepartmentVo;
  }