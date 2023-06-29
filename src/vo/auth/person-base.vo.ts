export interface PersonBaseVo {
    _id: string;

    title: string | null | undefined;
    nameF: string | null | undefined;
    nameM: string | null | undefined;
    nameL: string | null | undefined;

    cell: string;
    email: string | null | undefined;
    cell2: string;
    email2: string | null | undefined; // unverified

    img: string | null | undefined;
    doB: Date; // Date of Birth
    doD: Date; // Date of Death
    doA: Date; // Date of Anniversary
    poB: string | null | undefined; // Place of Birth
    gender: string | null | undefined; // Gender
}
