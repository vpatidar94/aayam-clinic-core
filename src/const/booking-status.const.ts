export const BOOKING_STATUS = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    COMPLETED: 'COMPLETED'
};

// OPD, APPOINTMENT, ADMISSION, INVESTIGATION, EMERGENCY
export const BOOKING_STATUS_NAME = {
    PENDING: 'Pending',
    CONFIRMED: 'Confirmed',
    COMPLETED: 'Completed',
};

export const BOOKING_STATUS_LIST = [
    {
        id: BOOKING_STATUS.PENDING,
        name: BOOKING_STATUS_NAME.PENDING
    },
    {
        id: BOOKING_STATUS.CONFIRMED,
        name: BOOKING_STATUS_NAME.CONFIRMED
    },
    {
        id: BOOKING_STATUS.COMPLETED,
        name: BOOKING_STATUS_NAME.COMPLETED
    }
];