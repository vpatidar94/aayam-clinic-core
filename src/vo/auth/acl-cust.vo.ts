import {AclVo} from './acl.vo';

export interface AclCustVo extends AclVo {
    enrollAt: Date; // Enrollment Date
}
