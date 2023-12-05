/**
 * AssetPathUtility -
 */

export class AssetPathUtility {

    static EMP = 'EMP';
    static PHOTO = 'PHOTO';
    static ID_PROOF = 'ID_PROOF';

    public static ASSET_IDENTITY = {
        EMP_PHOTO: 'EMP_PHOTO',
        EMP_ID_PROOF: 'EMP_ID_PROOF'
    };


    /* ************************************ Public Methods ************************************ */
    public static getPathEmpPhoto(empId: string): string {
        return `${AssetPathUtility.EMP}/${empId}/${AssetPathUtility.PHOTO}`;
    }

    public static getPathEmpIDProof(empId: string): string {
        return `${AssetPathUtility.EMP}/${empId}/${AssetPathUtility.ID_PROOF}`;
    }

    public static getPath(identity: string, assetId: string): string {
        let path = null;
        switch (identity) {
            case AssetPathUtility.ASSET_IDENTITY.EMP_PHOTO:
                path = AssetPathUtility.getPathEmpPhoto(assetId);
                break;
            case AssetPathUtility.ASSET_IDENTITY.EMP_ID_PROOF:
                path = AssetPathUtility.getPathEmpIDProof(assetId);
                break;
            default:
                path = '';
                break;
        }
        return path;
    }

    /* ************************************ Private Methods ************************************ */

}
