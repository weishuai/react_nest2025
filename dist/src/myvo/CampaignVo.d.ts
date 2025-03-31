import { SearchVo } from '../myutils/searchvo';
export declare class CampaignVo {
    name: string;
    id: string;
    starts: Date;
    ends: Date;
    owner: string;
    budget: number;
    status: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class CampaignSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
