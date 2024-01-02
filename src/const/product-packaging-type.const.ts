export const PRODUCT_PACK_TYPE = {
    UNIT: 'UNIT',
    STRIP: 'STRIP',
    PACK: 'PACK'
};

export const PRODUCT_PACK_TYPE_NAME = {
    UNIT: 'Per Unit',
    STRIP: 'Per Strip',
    PACK: 'Per PAck'
};

export const PRODUCT_PACK_TYPE_LIST = [
    {
        value: PRODUCT_PACK_TYPE.UNIT,
        label: PRODUCT_PACK_TYPE_NAME.UNIT
    },
    {
        value: PRODUCT_PACK_TYPE.STRIP,
        label: PRODUCT_PACK_TYPE_NAME.STRIP
    },
    {
        value: PRODUCT_PACK_TYPE.PACK,
        label: PRODUCT_PACK_TYPE_NAME.PACK
    }
];