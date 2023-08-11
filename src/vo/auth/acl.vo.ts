export interface AclVo {
    role: string | null | undefined; // SUPER_ADMIN, ADMIN, EMPLOYEE
    subRole: string | null | undefined; // GENERAL_STAFF, DOCTOR, LAB_STAFF, CHEMIST
    orgId: string | null | undefined; // Org Id or School Id
    brId: string | null | undefined; // branch - brId=master for master branch level access
    departmentId: string | null | undefined;
    userTypeId: string | null | undefined;
    designation: string | null | undefined; 
    active: boolean;
}
