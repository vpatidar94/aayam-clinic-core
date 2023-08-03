import { BookingVo, UserVo } from "../vo";

export interface OrgBookingDto {
    booking: BookingVo;
    patient: UserVo;
    drList: Array<UserVo>
}