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
exports.IndustryController = void 0;
const common_1 = require("@nestjs/common");
const IndustryService_1 = require("../myservices/IndustryService");
const IndustryVo_1 = require("../myvo/IndustryVo");
let IndustryController = class IndustryController {
    constructor() {
        this.industryService = new IndustryService_1.IndustryService();
    }
    async createIndustry(IndustryVo) {
        return this.industryService.createIndustry(IndustryVo);
    }
    async updateaIndustry(userToken, Id, IndustryVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.industryService.updateaIndustry(Id, userId, IndustryVo);
    }
    async removeIndustry(Id) {
        return this.industryService.removeIndustry([Id]);
    }
    async getIndustryById(Id) {
        return this.industryService.getIndustryById(Id);
    }
    async getIndustry(search) {
        return this.industryService.getIndustry(search);
    }
    async getIndustryAll(search) {
        return this.industryService.getIndustryAll(search);
    }
    async getIndustryAllView() {
        return this.industryService.getIndustryAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createIndustry'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [IndustryVo_1.IndustryVo]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "createIndustry", null);
__decorate([
    (0, common_1.Put)('/updateIndustry/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, IndustryVo_1.IndustryVo]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "updateaIndustry", null);
__decorate([
    (0, common_1.Get)('/removeIndustry/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "removeIndustry", null);
__decorate([
    (0, common_1.Get)('/getIndustryById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getIndustryById", null);
__decorate([
    (0, common_1.Get)('/getIndustry'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [IndustryVo_1.IndustrySearchVo]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getIndustry", null);
__decorate([
    (0, common_1.Get)('/getIndustryAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [IndustryVo_1.IndustrySearchVo]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getIndustryAll", null);
__decorate([
    (0, common_1.Get)('/getIndustryAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getIndustryAllView", null);
IndustryController = __decorate([
    (0, common_1.Controller)('/industry')
], IndustryController);
exports.IndustryController = IndustryController;
//# sourceMappingURL=IndustryController.js.map