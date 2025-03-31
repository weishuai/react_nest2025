import { SearchVo } from '../myutils/searchvo';
export declare class FhinspectionVo {
    id: string;
    name: string;
    fhname: any;
    fhF1: any;
    fhF2: any;
    fhF3: any;
    fhF4: any;
    fhF5: any;
    fhF6: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class FhinspectionSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
