"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignService = void 0;
const myrepositories_1 = require("../myrepositories");
class CampaignService {
    constructor() {
        this.CampaignRepo = new myrepositories_1.CampaignRepo();
    }
    async findOneCampaign(Id) {
        return this.CampaignRepo.getcampaignsById(Id);
    }
    async createCampaign(campaignVo) {
        return this.CampaignRepo.create(campaignVo);
    }
    async updateaCampaign(Id, user_id, campaignVo) {
        campaignVo.updatedUid = user_id;
        return this.CampaignRepo.update(Id, user_id, campaignVo);
    }
    async removeCampaign(Ids) {
        return this.CampaignRepo.remove(Ids);
    }
    async getCampaignById(id) {
        return this.CampaignRepo.getcampaignsById(id);
    }
    async getCampaign(search) {
        return this.CampaignRepo.getcampaigns(search);
    }
    async getCampaignsAll(search) {
        return this.CampaignRepo.getCampaignsAll(search);
    }
    async getCampaignsAllView() {
        return this.CampaignRepo.getCampaignsAllView();
    }
}
exports.CampaignService = CampaignService;
//# sourceMappingURL=CampaignService.js.map