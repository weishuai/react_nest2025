import { SearchVo } from '../myutils/searchvo';
export declare class FhreformVo {
    id: string;
    name: string;
    fhname: any;
    fhF1: any;
    fhF2: any;
    fhF3: any;
    fhF4: any;
    fhF5: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class FhreformSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
