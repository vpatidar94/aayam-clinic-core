import { BookingVo, UserVo } from "../vo";

export interface UserBookingDto {
    booking: BookingVo;
    user: UserVo;
}