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
exports.BatchController = void 0;
const common_1 = require("@nestjs/common");
const batch_service_1 = require("../myservices/batch_service");
const batch_vo_1 = require("../myvo/batch_vo");
let BatchController = class BatchController {
    constructor() {
        this.batchService = new batch_service_1.BatchService();
    }
    async createBatch(batchVo) {
        console.log('Body: ', batchVo);
        return await this.batchService.createBatch(batchVo);
    }
    async updateaBatch(userToken, Id, batchVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('BatchVo: ', batchVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.batchService.updateaBatch(Id, userId, batchVo);
    }
    async removeBatch(Id) {
        return await this.batchService.removeBatch(Id);
    }
    async getBatchById(Id) {
        return await this.batchService.getBatchById(Id);
    }
    async getBatchList(query) {
        console.log('query: ', query);
        const search = new batch_vo_1.BatchSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.batchService.getBatchList(search);
    }
    async getBatchAll() {
        return await this.batchService.getBatchAll();
    }
    async getBatchAllView() {
        return await this.batchService.getBatchAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createBatch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batch_vo_1.BatchVo]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "createBatch", null);
__decorate([
    (0, common_1.Put)('/updateBatch/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, batch_vo_1.BatchVo]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "updateaBatch", null);
__decorate([
    (0, common_1.Get)('/removeBatch/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "removeBatch", null);
__decorate([
    (0, common_1.Get)('/getBatchById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchById", null);
__decorate([
    (0, common_1.Get)('/getBatch'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchList", null);
__decorate([
    (0, common_1.Get)('/getBatchAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchAll", null);
__decorate([
    (0, common_1.Get)('/getBatchAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchAllView", null);
BatchController = __decorate([
    (0, common_1.Controller)('/batch')
], BatchController);
exports.BatchController = BatchController;
//# sourceMappingURL=batch_controller.js.map