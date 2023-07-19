export interface PrescriptionVo {
    name: string; // chemical name
    type: string; // tablet, capsules, topical(cream, lotion), drop, inhaler, injection, 
    power: string; // mg
    brand: string;
    dosage: string; // OD, BD, TDS, QDS
    instruction: string;
    quantity: number; // 0.5, 1, 2, 3
    beforeMeal: boolean;
}