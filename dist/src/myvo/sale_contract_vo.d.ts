import { SearchVo } from '../myutils/searchvo';
export declare class SaleContractVo {
    id: string;
    name: string;
    fhname: any;
    releaseTime: any;
    project: any;
    version: any;
    custom: any;
    expectedCompletion: any;
    productionCompleted: any;
    deliveryCompleted: any;
    estimatedTime: any;
    contractAmount: number;
    invoicingAmount: number;
    collectionAmount: number;
    completionProgress: any;
    specialRequirements: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class SaleContractSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
