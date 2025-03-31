import { SearchVo } from '../myutils/searchvo';
export declare class QualitylnspectionItemVo {
    id: string;
    name: string;
    mid: any;
    fhitem: any;
    fhtxt: any;
    fhnotes: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class QualitylnspectionItemSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
