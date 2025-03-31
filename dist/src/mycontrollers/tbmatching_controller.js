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
exports.TbmatchingController = void 0;
const common_1 = require("@nestjs/common");
const tbmatching_service_1 = require("../myservices/tbmatching_service");
const tbmatching_vo_1 = require("../myvo/tbmatching_vo");
let TbmatchingController = class TbmatchingController {
    constructor() {
        this.tbmatchingService = new tbmatching_service_1.TbmatchingService();
    }
    async createTbmatching(tbmatchingVo) {
        console.log('Body: ', tbmatchingVo);
        return await this.tbmatchingService.createTbmatching(tbmatchingVo);
    }
    async updateaTbmatching(userToken, Id, tbmatchingVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('TbmatchingVo: ', tbmatchingVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.tbmatchingService.updateaTbmatching(Id, userId, tbmatchingVo);
    }
    async removeTbmatching(Id) {
        return await this.tbmatchingService.removeTbmatching(Id);
    }
    async getTbmatchingById(Id) {
        return await this.tbmatchingService.getTbmatchingById(Id);
    }
    async getTbmatchingList(query) {
        console.log('query: ', query);
        const search = new tbmatching_vo_1.TbmatchingSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.tbmatchingService.getTbmatchingList(search);
    }
    async getTbmatchingAll() {
        return await this.tbmatchingService.getTbmatchingAll();
    }
    async getTbmatchingAllView() {
        return await this.tbmatchingService.getTbmatchingAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTbmatching'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tbmatching_vo_1.TbmatchingVo]),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "createTbmatching", null);
__decorate([
    (0, common_1.Put)('/updateTbmatching/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tbmatching_vo_1.TbmatchingVo]),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "updateaTbmatching", null);
__decorate([
    (0, common_1.Get)('/removeTbmatching/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "removeTbmatching", null);
__decorate([
    (0, common_1.Get)('/getTbmatchingById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "getTbmatchingById", null);
__decorate([
    (0, common_1.Get)('/getTbmatching'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "getTbmatchingList", null);
__decorate([
    (0, common_1.Get)('/getTbmatchingAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "getTbmatchingAll", null);
__decorate([
    (0, common_1.Get)('/getTbmatchingAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbmatchingController.prototype, "getTbmatchingAllView", null);
TbmatchingController = __decorate([
    (0, common_1.Controller)('/tbmatching')
], TbmatchingController);
exports.TbmatchingController = TbmatchingController;
//# sourceMappingURL=tbmatching_controller.js.map