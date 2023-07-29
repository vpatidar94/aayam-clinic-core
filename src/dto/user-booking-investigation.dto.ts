import { InvestigationVo } from "../vo";
import { UserBookingDto } from "./user-booking.dto";

export interface UserBookingInvestigationDto extends UserBookingDto {
    investigation: InvestigationVo;
}