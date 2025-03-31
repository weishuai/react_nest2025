import { SearchVo } from '../myutils/searchvo';
export declare class OpportunityVo {
    id: string;
    opportunityName: string;
    account: string;
    opportunityOwner: string;
    expiryDate: Date;
    stageName: string;
    probability: string;
    currency: string;
    salesValue: string;
    cost: string;
    remark: string;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    stage: string;
    dealAge: number;
    closeProbabilit: string;
    forecastValue: number;
    expectedCloseDate: Date;
    refNumber: string;
}
export declare class OpportunitySearchVo extends SearchVo {
    fundType: string;
    mid: string;
    mtable: string;
    startDate: Date;
    endDate: Date;
    stageName: string;
    Owner: string;
    GROUPaccount: string;
    GROUstageName: string;
}
export declare class FHOpportunitySearchVo {
    startDate: string;
    endDate: string;
    stageName: string;
    Owner: string;
    month: string;
    Client: string;
}
