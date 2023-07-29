export interface AddressVo {
    _id: string;

    address: string;
    city: string;
    district: string;
    state: string;
    country: string;


    // street1: stridresng | null | undefined;
    // street2: string | null | undefined;
    // landmark: string | null | undefined;
    // city: string | null | undefined;
    // zip: string | null | undefined;
    // zipext: string | null | undefined;
    // state: string | null | undefined;
    // country: string | null | undefined;

    // ph: string | null | undefined;
    // ph2: string | null | undefined;
    // cell: string | null | undefined;
    // cell2: string | null | undefined;
    // fax: string | null | undefined;
    // email: string | null | undefined;

    // web: string | null | undefined;
    // type: string | null | undefined;

    //    geo: GeoPoint? = null //com.google.firebase.firestore.GeoPoint
    lat: number | null | undefined;
    lng: number | null | undefined;
    // placeId: string | null | undefined;
    // formatted: string | null | undefined; // formatted Address

    created: Date;

    // default: boolean;
    // apartmentNo: string | null | undefined;
    // dropOffOption: string | null | undefined;
    note: string | null | undefined;
}
