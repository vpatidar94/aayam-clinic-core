export interface UserPermissionVo {
    _id: string; // orgId

    orgId: string;

    name: string;
    userId: string;

    access: boolean;
}
