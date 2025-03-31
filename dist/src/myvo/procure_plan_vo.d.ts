import { SearchVo } from '../myutils/searchvo';
export declare class ProcurePlanVo {
    id: string;
    name: string;
    fhname: any;
    purchaser: any;
    applicationType: any;
    supplier: any;
    deadline: any;
    subscriptionDate: any;
    deliveryDate: any;
    sourceFile: any;
    jobType: any;
    company: any;
    term: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class ProcurePlanSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
