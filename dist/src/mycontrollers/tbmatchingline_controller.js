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
exports.TbmatchinglineController = void 0;
const common_1 = require("@nestjs/common");
const tbmatchingline_service_1 = require("../myservices/tbmatchingline_service");
const tbmatchingline_vo_1 = require("../myvo/tbmatchingline_vo");
let TbmatchinglineController = class TbmatchinglineController {
    constructor() {
        this.tbmatchinglineService = new tbmatchingline_service_1.TbmatchinglineService();
    }
    async createTbmatchingline(tbmatchinglineVo) {
        console.log('Body: ', tbmatchinglineVo);
        return await this.tbmatchinglineService.createTbmatchingline(tbmatchinglineVo);
    }
    async updateaTbmatchingline(userToken, Id, tbmatchinglineVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('TbmatchinglineVo: ', tbmatchinglineVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.tbmatchinglineService.updateaTbmatchingline(Id, userId, tbmatchinglineVo);
    }
    async removeTbmatchingline(Id) {
        return await this.tbmatchinglineService.removeTbmatchingline(Id);
    }
    async getTbmatchinglineById(Id) {
        return await this.tbmatchinglineService.getTbmatchinglineById(Id);
    }
    async getTbmatchinglineList(query) {
        console.log('query: ', query);
        const search = new tbmatchingline_vo_1.TbmatchinglineSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.tbmatchinglineService.getTbmatchinglineList(search);
    }
    async getTbmatchinglineAll() {
        return await this.tbmatchinglineService.getTbmatchinglineAll();
    }
    async getTbmatchinglineAllView() {
        return await this.tbmatchinglineService.getTbmatchinglineAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTbmatchingline'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tbmatchingline_vo_1.TbmatchinglineVo]),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "createTbmatchingline", null);
__decorate([
    (0, common_1.Put)('/updateTbmatchingline/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tbmatchingline_vo_1.TbmatchinglineVo]),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "updateaTbmatchingline", null);
__decorate([
    (0, common_1.Get)('/removeTbmatchingline/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "removeTbmatchingline", null);
__decorate([
    (0, common_1.Get)('/getTbmatchinglineById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "getTbmatchinglineById", null);
__decorate([
    (0, common_1.Get)('/getTbmatchingline'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "getTbmatchinglineList", null);
__decorate([
    (0, common_1.Get)('/getTbmatchinglineAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "getTbmatchinglineAll", null);
__decorate([
    (0, common_1.Get)('/getTbmatchinglineAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbmatchinglineController.prototype, "getTbmatchinglineAllView", null);
TbmatchinglineController = __decorate([
    (0, common_1.Controller)('/tbmatchingline')
], TbmatchinglineController);
exports.TbmatchinglineController = TbmatchinglineController;
//# sourceMappingURL=tbmatchingline_controller.js.map