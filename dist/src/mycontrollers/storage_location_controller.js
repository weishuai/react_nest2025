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
exports.StoragelocationController = void 0;
const common_1 = require("@nestjs/common");
const storage_location_service_1 = require("../myservices/storage_location_service");
const storage_location_vo_1 = require("../myvo/storage_location_vo");
let StoragelocationController = class StoragelocationController {
    constructor() {
        this.storagelocationService = new storage_location_service_1.StoragelocationService();
    }
    async createStoragelocation(storagelocationVo) {
        console.log('Body: ', storagelocationVo);
        return await this.storagelocationService.createStoragelocation(storagelocationVo);
    }
    async updateaStoragelocation(userToken, Id, storagelocationVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('StoragelocationVo: ', storagelocationVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.storagelocationService.updateaStoragelocation(Id, userId, storagelocationVo);
    }
    async removeStoragelocation(Id) {
        return await this.storagelocationService.removeStoragelocation(Id);
    }
    async getStoragelocationById(Id) {
        return await this.storagelocationService.getStoragelocationById(Id);
    }
    async getStoragelocationList(query) {
        console.log('query: ', query);
        const search = new storage_location_vo_1.StoragelocationSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.storagelocationService.getStoragelocationList(search);
    }
    async getStoragelocationAll() {
        return await this.storagelocationService.getStoragelocationAll();
    }
    async getStoragelocationAllView() {
        return await this.storagelocationService.getStoragelocationAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStoragelocation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [storage_location_vo_1.StoragelocationVo]),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "createStoragelocation", null);
__decorate([
    (0, common_1.Put)('/updateStoragelocation/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, storage_location_vo_1.StoragelocationVo]),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "updateaStoragelocation", null);
__decorate([
    (0, common_1.Get)('/removeStoragelocation/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "removeStoragelocation", null);
__decorate([
    (0, common_1.Get)('/getStoragelocationById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "getStoragelocationById", null);
__decorate([
    (0, common_1.Get)('/getStoragelocation'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "getStoragelocationList", null);
__decorate([
    (0, common_1.Get)('/getStoragelocationAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "getStoragelocationAll", null);
__decorate([
    (0, common_1.Get)('/getStoragelocationAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoragelocationController.prototype, "getStoragelocationAllView", null);
StoragelocationController = __decorate([
    (0, common_1.Controller)('/storagelocation')
], StoragelocationController);
exports.StoragelocationController = StoragelocationController;
//# sourceMappingURL=storage_location_controller.js.map