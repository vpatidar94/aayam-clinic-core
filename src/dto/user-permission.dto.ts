export interface UserPermissionDto {
    orgId: string;
    userId: string;

    permissionList: string[];

    access: boolean;
}
