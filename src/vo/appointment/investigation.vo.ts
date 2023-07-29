export interface InvestigationVo {
    _id: string;

    name: string;

    patientId: string;
    bookingId: string;
    orgId: string;
    
    dr: string;

    date: Date;
    created: Date;

    url: string;
    
}