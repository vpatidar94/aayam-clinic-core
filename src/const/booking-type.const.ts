export const BOOKING_TYPE = {
    APPOINTMENT: 'APPOINTMENT',
    PATIENT: 'PATIENT',
};

export const BOOKING_TYPE_NAME = {
    PATIENT: 'Patient',
    APPOINTMENT: 'Appointement'
};

export const BOOKING_TYPE_LIST = [

    {
        id: BOOKING_TYPE.PATIENT,
        name: BOOKING_TYPE_NAME.PATIENT
    },
    {
        id: BOOKING_TYPE.APPOINTMENT,
        name: BOOKING_TYPE_NAME.APPOINTMENT
    }
];