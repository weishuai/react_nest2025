import { SearchVo } from '../myutils/searchvo';
export declare class TbmatchingVo {
    id: string;
    name: string;
    fhname: any;
    fhdate: any;
    sampleDate: any;
    documentNumber: any;
    customerCode: any;
    customerName: number;
    sampleName: any;
    numbe: number;
    component: any;
    appearanceStyle: any;
    requirements: any;
    technology: any;
    mycheck: number;
    registration: number;
    quotation: number;
    manufacturingOrders: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TbmatchingSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
