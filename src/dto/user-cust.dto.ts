import { AclCustVo, UserVo } from "../vo";

export class UserCustDto {

    /* ************************************ Instance Fields ************************************ */
    user: UserVo;
    acl: AclCustVo;

    /* ************************************ Constructors ************************************ */
    constructor(user: UserVo, acl: AclCustVo) {
        this.user = user;
        this.acl = acl;
    }
}
