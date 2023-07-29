import { BookingVo, InvestigationVo, UserVo } from "../vo";

export interface UserBookingDto {
    booking: BookingVo;
    user: UserVo;
}