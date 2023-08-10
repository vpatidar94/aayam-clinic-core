import { OrgBookingDto } from "./org-booking.dto";

export interface OrgBookingCountDto {
    orgBooking: Array<OrgBookingDto>;
    totalBooking: number;
}