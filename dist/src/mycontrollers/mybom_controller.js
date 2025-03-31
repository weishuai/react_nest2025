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
exports.mybomController = void 0;
const common_1 = require("@nestjs/common");
const mybom_service_1 = require("../myservices/mybom_service");
const mybom_vo_1 = require("../myvo/mybom_vo");
let mybomController = class mybomController {
    constructor() {
        this.mybomService = new mybom_service_1.mybomService();
    }
    async createmybom(mybomVo) {
        console.log('Body: ', mybomVo);
        return await this.mybomService.createmybom(mybomVo);
    }
    async updateamybom(userToken, Id, mybomVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('mybomVo: ', mybomVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.mybomService.updateamybom(Id, userId, mybomVo);
    }
    async removemybom(Id) {
        return await this.mybomService.removemybom(Id);
    }
    async getmybomById(Id) {
        return await this.mybomService.getmybomById(Id);
    }
    async getmybomList(query) {
        console.log('query: ', query);
        const search = new mybom_vo_1.mybomSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.mybomService.getmybomList(search);
    }
    async getmybomAll() {
        return await this.mybomService.getmybomAll();
    }
    async getmybomAllView() {
        return await this.mybomService.getmybomAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createmybom'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mybom_vo_1.mybomVo]),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "createmybom", null);
__decorate([
    (0, common_1.Put)('/updatemybom/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, mybom_vo_1.mybomVo]),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "updateamybom", null);
__decorate([
    (0, common_1.Get)('/removemybom/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "removemybom", null);
__decorate([
    (0, common_1.Get)('/getmybomById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "getmybomById", null);
__decorate([
    (0, common_1.Get)('/getmybom'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "getmybomList", null);
__decorate([
    (0, common_1.Get)('/getmybomAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "getmybomAll", null);
__decorate([
    (0, common_1.Get)('/getmybomAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], mybomController.prototype, "getmybomAllView", null);
mybomController = __decorate([
    (0, common_1.Controller)('/mybom')
], mybomController);
exports.mybomController = mybomController;
//# sourceMappingURL=mybom_controller.js.map