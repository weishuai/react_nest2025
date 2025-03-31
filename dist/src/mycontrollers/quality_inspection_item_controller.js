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
exports.QualitylnspectionItemController = void 0;
const common_1 = require("@nestjs/common");
const quality_inspection_item_service_1 = require("../myservices/quality_inspection_item_service");
const quality_inspection_item_vo_1 = require("../myvo/quality_inspection_item_vo");
let QualitylnspectionItemController = class QualitylnspectionItemController {
    constructor() {
        this.qualitylnspectionItemService = new quality_inspection_item_service_1.QualitylnspectionItemService();
    }
    async createQualitylnspectionItem(qualitylnspectionItemVo) {
        console.log('Body: ', qualitylnspectionItemVo);
        return await this.qualitylnspectionItemService.createQualitylnspectionItem(qualitylnspectionItemVo);
    }
    async updateaQualitylnspectionItem(userToken, Id, qualitylnspectionItemVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('QualitylnspectionItemVo: ', qualitylnspectionItemVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.qualitylnspectionItemService.updateaQualitylnspectionItem(Id, userId, qualitylnspectionItemVo);
    }
    async removeQualitylnspectionItem(Id) {
        return await this.qualitylnspectionItemService.removeQualitylnspectionItem(Id);
    }
    async getQualitylnspectionItemById(Id) {
        return await this.qualitylnspectionItemService.getQualitylnspectionItemById(Id);
    }
    async getQualitylnspectionItemList(query) {
        console.log('query: ', query);
        const search = new quality_inspection_item_vo_1.QualitylnspectionItemSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.qualitylnspectionItemService.getQualitylnspectionItemList(search);
    }
    async getQualitylnspectionItemAll() {
        return await this.qualitylnspectionItemService.getQualitylnspectionItemAll();
    }
    async getQualitylnspectionItemAllView() {
        return await this.qualitylnspectionItemService.getQualitylnspectionItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createQualitylnspectionItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quality_inspection_item_vo_1.QualitylnspectionItemVo]),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "createQualitylnspectionItem", null);
__decorate([
    (0, common_1.Put)('/updateQualitylnspectionItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, quality_inspection_item_vo_1.QualitylnspectionItemVo]),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "updateaQualitylnspectionItem", null);
__decorate([
    (0, common_1.Get)('/removeQualitylnspectionItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "removeQualitylnspectionItem", null);
__decorate([
    (0, common_1.Get)('/getQualitylnspectionItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "getQualitylnspectionItemById", null);
__decorate([
    (0, common_1.Get)('/getQualitylnspectionItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "getQualitylnspectionItemList", null);
__decorate([
    (0, common_1.Get)('/getQualitylnspectionItemAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "getQualitylnspectionItemAll", null);
__decorate([
    (0, common_1.Get)('/getQualitylnspectionItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QualitylnspectionItemController.prototype, "getQualitylnspectionItemAllView", null);
QualitylnspectionItemController = __decorate([
    (0, common_1.Controller)('/qualitylnspectionItem')
], QualitylnspectionItemController);
exports.QualitylnspectionItemController = QualitylnspectionItemController;
//# sourceMappingURL=quality_inspection_item_controller.js.map