/**
 * AssetPathUtility -
 */

export class AssetPathUtility {

    static EMP = 'EMP';
    static ORG = 'ORG';
    static PHOTO = 'PHOTO';
    static ID_PROOF = 'ID_PROOF';
    static LOGO = 'LOGO';
    static COVER = 'COVER';

    public static ASSET_IDENTITY = {
        EMP_PHOTO: 'EMP_PHOTO',
        EMP_ID_PROOF: 'EMP_ID_PROOF',
        ORG_LOGO: 'ORG_LOGO',
        ORG_COVER: 'ORG_COVER'
    };


    /* ************************************ Public Methods ************************************ */
    public static getPathEmpPhoto(empId: string): string {
        return `${AssetPathUtility.EMP}/${empId}/${AssetPathUtility.PHOTO}`;
    }

    public static getPathEmpIDProof(empId: string): string {
        return `${AssetPathUtility.EMP}/${empId}/${AssetPathUtility.ID_PROOF}`;
    }

    public static getPathOrgLogo(orgId: string): string {
        return `${AssetPathUtility.ORG}/${orgId}/${AssetPathUtility.LOGO}`;
    }

    public static getPathOrgCover(orgId: string): string {
        return `${AssetPathUtility.ORG}/${orgId}/${AssetPathUtility.COVER}`;
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
            case AssetPathUtility.ASSET_IDENTITY.ORG_LOGO:
                path = AssetPathUtility.getPathOrgLogo(assetId);
                break;
            case AssetPathUtility.ASSET_IDENTITY.ORG_COVER:
                path = AssetPathUtility.getPathOrgCover(assetId);
                break;
            default:
                path = '';
                break;
        }
        return path;
    }

    /* ************************************ Private Methods ************************************ */

}
