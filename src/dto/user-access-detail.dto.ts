import { UserAccessDto } from "./user-access.dto";

export interface UserAccessDetailDto {
    current: UserAccessDto;
    all: Array<UserAccessDto>;
}