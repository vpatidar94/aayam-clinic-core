export interface AclVo {
    role: string | null | undefined;
    orgId: string | null | undefined; // Org Id or School Id
    brId: string | null | undefined; // branch - brId=master for master branch level access
    active: boolean;
}
