import { CampaignRepo } from '../myrepositories';
import { CampaignSearchVo, CampaignVo } from '../myvo/CampaignVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class CampaignService {
  private CampaignRepo = new CampaignRepo();

  async findOneCampaign(Id: string) {
    ///const issue = new Fhtest();
    return this.CampaignRepo.getcampaignsById(Id);
  }

  async createCampaign(campaignVo: CampaignVo) {
    return this.CampaignRepo.create(campaignVo);
  }

  async updateaCampaign(Id: string, user_id: string, campaignVo: CampaignVo) {
    ///campaignVo.updatedAt = new Date();

    campaignVo.updatedUid = user_id;
    return this.CampaignRepo.update(Id, user_id, campaignVo);
  }

  async removeCampaign(Ids: string[]) {
    return this.CampaignRepo.remove(Ids);
  }

  async getCampaignById(id: string) {
    return this.CampaignRepo.getcampaignsById(id);
  }

  async getCampaign(search: CampaignSearchVo) {
    return this.CampaignRepo.getcampaigns(search);
  }

  async getCampaignsAll(search: CampaignSearchVo) {
    return this.CampaignRepo.getCampaignsAll(search);
  }

  async getCampaignsAllView() {
    return this.CampaignRepo.getCampaignsAllView();
  }
}
