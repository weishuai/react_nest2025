import { CampaignSearchVo, CampaignVo } from '../myvo/CampaignVo';
export declare class CampaignsController {
    private campaignService;
    createCampaign(CampaignVo: CampaignVo): Promise<import("typeorm").InsertResult>;
    updateaCampaign(userToken: string, Id: string, CampaignVo: CampaignVo): Promise<import("typeorm").UpdateResult>;
    removeCampaign(Id: string): Promise<import("typeorm").UpdateResult>;
    getCampaignById(Id: string): Promise<any>;
    getCampaign(search: CampaignSearchVo): Promise<any[]>;
    getCampaignsAll(search: CampaignSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getCampaignsAllView(): Promise<any[]>;
}
