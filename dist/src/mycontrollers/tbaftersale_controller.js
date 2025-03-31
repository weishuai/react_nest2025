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
exports.TbaftersaleController = void 0;
const common_1 = require("@nestjs/common");
const tbaftersale_service_1 = require("../myservices/tbaftersale_service");
const tbaftersale_vo_1 = require("../myvo/tbaftersale_vo");
let TbaftersaleController = class TbaftersaleController {
    constructor() {
        this.tbaftersaleService = new tbaftersale_service_1.TbaftersaleService();
    }
    async createTbaftersale(tbaftersaleVo) {
        console.log('Body: ', tbaftersaleVo);
        return await this.tbaftersaleService.createTbaftersale(tbaftersaleVo);
    }
    async updateaTbaftersale(userToken, Id, tbaftersaleVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('TbaftersaleVo: ', tbaftersaleVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.tbaftersaleService.updateaTbaftersale(Id, userId, tbaftersaleVo);
    }
    async removeTbaftersale(Id) {
        return await this.tbaftersaleService.removeTbaftersale(Id);
    }
    async getTbaftersaleById(Id) {
        return await this.tbaftersaleService.getTbaftersaleById(Id);
    }
    async getTbaftersaleList(query) {
        console.log('query: ', query);
        const search = new tbaftersale_vo_1.TbaftersaleSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.tbaftersaleService.getTbaftersaleList(search);
    }
    async getTbaftersaleAll() {
        return await this.tbaftersaleService.getTbaftersaleAll();
    }
    async getTbaftersaleAllView() {
        return await this.tbaftersaleService.getTbaftersaleAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTbaftersale'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tbaftersale_vo_1.TbaftersaleVo]),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "createTbaftersale", null);
__decorate([
    (0, common_1.Put)('/updateTbaftersale/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tbaftersale_vo_1.TbaftersaleVo]),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "updateaTbaftersale", null);
__decorate([
    (0, common_1.Get)('/removeTbaftersale/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "removeTbaftersale", null);
__decorate([
    (0, common_1.Get)('/getTbaftersaleById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "getTbaftersaleById", null);
__decorate([
    (0, common_1.Get)('/getTbaftersale'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "getTbaftersaleList", null);
__decorate([
    (0, common_1.Get)('/getTbaftersaleAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "getTbaftersaleAll", null);
__decorate([
    (0, common_1.Get)('/getTbaftersaleAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TbaftersaleController.prototype, "getTbaftersaleAllView", null);
TbaftersaleController = __decorate([
    (0, common_1.Controller)('/tbaftersale')
], TbaftersaleController);
exports.TbaftersaleController = TbaftersaleController;
//# sourceMappingURL=tbaftersale_controller.js.map