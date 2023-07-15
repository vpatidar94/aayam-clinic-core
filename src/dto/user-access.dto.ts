import { AclVo, OrgVo } from "../vo";

export interface UserAccessDto extends AclVo {
    org: OrgVo;
}