import {AclVo} from './acl.vo';
import {AclCustVo} from './acl-cust.vo';
import {PersonBaseVo} from './person-base.vo';

export interface UserVo extends PersonBaseVo {
    /* use this id to link other user profile with main profile */
//    id: string;

    /* Subject (sub) - identifies the subject of the JWT. */
    sub: string | null | undefined;

    cover: string | null | undefined;

//    @Deprecated("emp and cust field should take care")
    // role: string | null | undefined;

    cust: { [key: string]: AclCustVo }; // brId customer of org e.g. {brId1: true, brId2: false, brId3: true}
    emp: { [key: string]: AclVo }; // brId -OR- AppId -> employee of >> account link to company/org/agent/corp/school

    crtBy: string | null | undefined;
    created: Date;
}
