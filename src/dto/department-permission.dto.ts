export interface DepartmentPermissionDto {
    orgId: string;
    departmentId: string;

    permissionList: string[];

    access: boolean;
}
