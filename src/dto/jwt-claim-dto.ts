import { AclVo } from "../vo";
import { UserAccessDto } from "./user-access.dto";

/**
 * JwtClaimDto
 */
export interface JwtClaimDto {

  /* ************************************ Instance Fields ************************************ */
  name: string;
  cuid: string;
  userId: string;
  userEmail: string;
  userCell: string;
  userAccess: AclVo;
  userAccessList: Array<AclVo>;
}
