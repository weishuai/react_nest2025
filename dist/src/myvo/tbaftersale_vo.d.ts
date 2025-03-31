import { SearchVo } from '../myutils/searchvo';
export declare class TbaftersaleVo {
    id: string;
    name: string;
    mid: any;
    project: any;
    fhdate: any;
    location: any;
    contacts: any;
    contactInformation: any;
    VisitDescription: any;
    problemHandling: any;
    remainingProblems: any;
    afterSalesType: any;
    annex: any;
    processedBy: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TbaftersaleSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
