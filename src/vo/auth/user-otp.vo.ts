export interface UserOtpVo {
    _id: string;
    userId: string;
    empCode: string;
    otp: number;
    created: Date;
    cell: string;
}