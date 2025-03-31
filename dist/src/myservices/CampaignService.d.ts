import { CampaignSearchVo, CampaignVo } from '../myvo/CampaignVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class CampaignService {
    private CampaignRepo;
    findOneCampaign(Id: string): Promise<any>;
    createCampaign(campaignVo: CampaignVo): Promise<import("typeorm").InsertResult>;
    updateaCampaign(Id: string, user_id: string, campaignVo: CampaignVo): Promise<import("typeorm").UpdateResult>;
    removeCampaign(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getCampaignById(id: string): Promise<any>;
    getCampaign(search: CampaignSearchVo): Promise<any[]>;
    getCampaignsAll(search: CampaignSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCampaignsAllView(): Promise<any[]>;
}
