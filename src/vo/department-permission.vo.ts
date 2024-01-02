export interface DepartmentPermissionVo {
    _id: string; // orgId

    orgId: string;

    name: string;
    departmentId: string;

    access: boolean;
}
