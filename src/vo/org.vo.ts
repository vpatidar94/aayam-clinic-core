import { AddressVo } from "./address.vo";


// Organization / Enterprise / Merchant / Business / Company / Client
export interface OrgVo {
    _id: string; // orgId

    appId: string | null | undefined; // @see AppId.kt AppId identify type of Application Org associate with
    appName: string | null | undefined; // underneath to the app launch icon

    // Corporate Legal Information
    nameShort: string | null | undefined;
    name: string; // Legal Name
    nameHi: string | null | undefined; // native language
    codeSuffix: string; //3 character suffix of org

    type: string | null | undefined; // Type Clinic/Hospital

    taxpayerId: string | null | undefined; // taxpayer Id

    icon: string | null | undefined; // img file name // circle or square in shape
    logo: string | null | undefined; // img file name
    cover: string | null | undefined; // img file name'

    address: AddressVo | null | undefined;

    domain: string | null | undefined;
    tagline: string | null | undefined; // Business Tagline

    gst: Date | null | undefined;
    reg: string | null | undefined; // registration

    ph: string | null | undefined;
    email: string | null | undefined;

    status: string | null | undefined; // affiliation/status - NOT_APPROVED, IN_PROGRESS (Application submit for review), APPROVED/REJECT (by Admin), LIVE/DEAD (by Admin), ACTIVE/INACTIVE (by org)
    del: boolean;

    modBy: string | null | undefined;
    crtBy: string | null | undefined;
    modified: Date;
    created: Date;

    adminName: string | null | undefined;
    adminCells: string | null | undefined;
    adminDesignation: string | null | undefined;

    expiryPanel: Date | null | undefined;
    category: string | null | undefined; // BASIC, STARTER, ENTERPRISE, PREMIUM

}
