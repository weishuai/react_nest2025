import { SearchVo } from '../myutils/searchvo';
export declare class FhservicePlanVo {
    id: string;
    name: string;
    fhname: any;
    fhF1: any;
    fhF2: any;
    fhF3: any;
    fhF4: any;
    fhF5: any;
    fhF6: any;
    fhF7: any;
    fhF8: any;
    fhF9: any;
    fhF10: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class FhservicePlanSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
