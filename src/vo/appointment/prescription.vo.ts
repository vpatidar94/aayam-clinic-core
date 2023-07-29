export interface PrescriptionVo {
    name: string; // chemical name
    dosage: string; // OD, BD, TDS, QDS
    duration: number; // days
    instruction: string;
}