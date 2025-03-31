import { SearchVo } from '../myutils/searchvo';
export declare class FhmeasuringVo {
    id: string;
    name: string;
    fhname: any;
    fhF1: any;
    fhF2: number;
    fhF3: any;
    fhF4: number;
    fhF5: number;
    fhF6: number;
    fhF7: any;
    fhF8: number;
    fhF9: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class FhmeasuringSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
