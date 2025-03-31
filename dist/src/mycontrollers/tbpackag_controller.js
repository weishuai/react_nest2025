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
exports.TbpackagController = void 0;
const common_1 = require("@nestjs/common");
const tbpackag_service_1 = require("../myservices/tbpackag_service");
const tbpackag_vo_1 = require("../myvo/tbpackag_vo");
let TbpackagController = class TbpackagController {
    constructor() {
        this.tbpackagService = new tbpackag_service_1.TbpackagService();
    }
    async createTbpackag(tbpackagVo) {
        console.log('Body: ', tbpackagVo);
        return await this.tbpackagService.createTbpackag(tbpackagVo);
    }
    async updateaTbpackag(userToken, Id, tbpackagVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('TbpackagVo: ', tbpackagVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.tbpackagService.updateaTbpackag(Id, userId, tbpackagVo);
    }
    async removeTbpackag(Id) {
        return await this.tbpackagService.removeTbpackag(Id);
    }
    async getTbpackagById(Id) {
        return await this.tbpackagService.getTbpackagById(Id);
    }
    async getTbpackagList(query) {
        console.log('query: ', query);
        const search = new tbpackag_vo_1.TbpackagSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.tbpackagService.getTbpackagList(search);
    }
    async getTbpackagAll() {
        return await this.tbpackagService.getTbpackagAll();
    }
    async getTbpackagAllView() {
        return await this.tbpackagService.getTbpackagAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTbpackag'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tbpackag_vo_1.TbpackagVo]),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "createTbpackag", null);
__decorate([
    (0, common_1.Put)('/updateTbpackag/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tbpackag_vo_1.TbpackagVo]),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "updateaTbpackag", null);
__decorate([
    (0, common_1.Get)('/removeTbpackag/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "removeTbpackag", null);
__decorate([
    (0, common_1.Get)('/getTbpackagById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "getTbpackagById", null);
__decorate([
    (0, common_1.Get)('/getTbpackag'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "getTbpackagList", null);
__decorate([
    (0, common_1.Get)('/getTbpackagAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "getTbpackagAll", null);
__decorate([
    (0, common_1.Get)('/getTbpackagAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbpackagController.prototype, "getTbpackagAllView", null);
TbpackagController = __decorate([
    (0, common_1.Controller)('/tbpackag')
], TbpackagController);
exports.TbpackagController = TbpackagController;
//# sourceMappingURL=tbpackag_controller.js.map