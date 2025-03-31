import { SearchVo } from '../myutils/searchvo';
export declare class FhservicetbVo {
    id: string;
    name: string;
    fhname: any;
    fhF0: any;
    fhF1: number;
    fhF2: number;
    fhF3: any;
    fhF4: any;
    fhF5: number;
    fhF6: any;
    fhF7: any;
    fhF8: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class FhservicetbSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
