import { AclVo, UserVo } from "../vo";

export class UserEmpDto {

    /* ************************************ Instance Fields ************************************ */
    user: UserVo;
    acl: AclVo;

    /* ************************************ Constructors ************************************ */
    constructor(user: UserVo, acl: AclVo) {
        this.user = user;
        this.acl = acl;
    }

}
