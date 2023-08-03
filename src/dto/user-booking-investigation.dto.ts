import { BookingVo, InvestigationVo, UserVo } from "../vo";

export interface UserBookingInvestigationDto {
    bookingList: Array<BookingVo>;
    investigation: Array<InvestigationVo>;
    user: UserVo;
}