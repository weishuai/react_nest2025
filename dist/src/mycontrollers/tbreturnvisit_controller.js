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
exports.TbreturnvisitController = void 0;
const common_1 = require("@nestjs/common");
const tbreturnvisit_service_1 = require("../myservices/tbreturnvisit_service");
const tbreturnvisit_vo_1 = require("../myvo/tbreturnvisit_vo");
let TbreturnvisitController = class TbreturnvisitController {
    constructor() {
        this.tbreturnvisitService = new tbreturnvisit_service_1.TbreturnvisitService();
    }
    async createTbreturnvisit(tbreturnvisitVo) {
        console.log('Body: ', tbreturnvisitVo);
        return await this.tbreturnvisitService.createTbreturnvisit(tbreturnvisitVo);
    }
    async updateaTbreturnvisit(userToken, Id, tbreturnvisitVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('TbreturnvisitVo: ', tbreturnvisitVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.tbreturnvisitService.updateaTbreturnvisit(Id, userId, tbreturnvisitVo);
    }
    async removeTbreturnvisit(Id) {
        return await this.tbreturnvisitService.removeTbreturnvisit(Id);
    }
    async getTbreturnvisitById(Id) {
        return await this.tbreturnvisitService.getTbreturnvisitById(Id);
    }
    async getTbreturnvisitList(query) {
        console.log('query: ', query);
        const search = new tbreturnvisit_vo_1.TbreturnvisitSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.tbreturnvisitService.getTbreturnvisitList(search);
    }
    async getTbreturnvisitAll() {
        return await this.tbreturnvisitService.getTbreturnvisitAll();
    }
    async getTbreturnvisitAllView() {
        return await this.tbreturnvisitService.getTbreturnvisitAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTbreturnvisit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tbreturnvisit_vo_1.TbreturnvisitVo]),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "createTbreturnvisit", null);
__decorate([
    (0, common_1.Put)('/updateTbreturnvisit/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tbreturnvisit_vo_1.TbreturnvisitVo]),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "updateaTbreturnvisit", null);
__decorate([
    (0, common_1.Get)('/removeTbreturnvisit/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "removeTbreturnvisit", null);
__decorate([
    (0, common_1.Get)('/getTbreturnvisitById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "getTbreturnvisitById", null);
__decorate([
    (0, common_1.Get)('/getTbreturnvisit'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "getTbreturnvisitList", null);
__decorate([
    (0, common_1.Get)('/getTbreturnvisitAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "getTbreturnvisitAll", null);
__decorate([
    (0, common_1.Get)('/getTbreturnvisitAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbreturnvisitController.prototype, "getTbreturnvisitAllView", null);
TbreturnvisitController = __decorate([
    (0, common_1.Controller)('/tbreturnvisit')
], TbreturnvisitController);
exports.TbreturnvisitController = TbreturnvisitController;
//# sourceMappingURL=tbreturnvisit_controller.js.map