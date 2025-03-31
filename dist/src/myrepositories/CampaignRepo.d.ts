import { CampaignSearchVo, CampaignVo } from '../myvo/CampaignVo';
export declare class CampaignRepo {
    create(accountTagVo: CampaignVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: CampaignVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getcampaignsById(id: string): Promise<any>;
    getCampaignsAll(search: CampaignSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCampaignsAllView(): Promise<any[]>;
    getcampaigns(search: CampaignSearchVo): Promise<any[]>;
}
