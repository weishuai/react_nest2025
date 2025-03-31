"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignsController = void 0;
const common_1 = require("@nestjs/common");
const CampaignService_1 = require("../myservices/CampaignService");
const CampaignVo_1 = require("../myvo/CampaignVo");
let CampaignsController = class CampaignsController {
    constructor() {
        this.campaignService = new CampaignService_1.CampaignService();
    }
    async createCampaign(CampaignVo) {
        return this.campaignService.createCampaign(CampaignVo);
    }
    async updateaCampaign(userToken, Id, CampaignVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.campaignService.updateaCampaign(Id, userId, CampaignVo);
    }
    async removeCampaign(Id) {
        return this.campaignService.removeCampaign([Id]);
    }
    async getCampaignById(Id) {
        return this.campaignService.getCampaignById(Id);
    }
    async getCampaign(search) {
        return this.campaignService.getCampaign(search);
    }
    async getCampaignsAll(search) {
        return this.campaignService.getCampaignsAll(search);
    }
    async getCampaignsAllView() {
        return this.campaignService.getCampaignsAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createCampaign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CampaignVo_1.CampaignVo]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "createCampaign", null);
__decorate([
    (0, common_1.Put)('/updateCampaign/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, CampaignVo_1.CampaignVo]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "updateaCampaign", null);
__decorate([
    (0, common_1.Get)('/removeCampaign/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "removeCampaign", null);
__decorate([
    (0, common_1.Get)('/getCampaignById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getCampaignById", null);
__decorate([
    (0, common_1.Get)('/getCampaign'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CampaignVo_1.CampaignSearchVo]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getCampaign", null);
__decorate([
    (0, common_1.Get)('/getCampaignAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CampaignVo_1.CampaignSearchVo]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getCampaignsAll", null);
__decorate([
    (0, common_1.Get)('/getCampaignAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getCampaignsAllView", null);
CampaignsController = __decorate([
    (0, common_1.Controller)('/campaign')
], CampaignsController);
exports.CampaignsController = CampaignsController;
//# sourceMappingURL=CampaignsController.js.map