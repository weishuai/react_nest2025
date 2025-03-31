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
exports.QualityInspectionController = void 0;
const common_1 = require("@nestjs/common");
const quality_inspection_service_1 = require("../myservices/quality_inspection_service");
const quality_inspection_vo_1 = require("../myvo/quality_inspection_vo");
let QualityInspectionController = class QualityInspectionController {
    constructor() {
        this.qualityInspectionService = new quality_inspection_service_1.QualityInspectionService();
    }
    async createQualityInspection(qualityInspectionVo) {
        console.log('Body: ', qualityInspectionVo);
        return await this.qualityInspectionService.createQualityInspection(qualityInspectionVo);
    }
    async updateaQualityInspection(userToken, Id, qualityInspectionVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('QualityInspectionVo: ', qualityInspectionVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.qualityInspectionService.updateaQualityInspection(Id, userId, qualityInspectionVo);
    }
    async removeQualityInspection(Id) {
        return await this.qualityInspectionService.removeQualityInspection(Id);
    }
    async getQualityInspectionById(Id) {
        return await this.qualityInspectionService.getQualityInspectionById(Id);
    }
    async getQualityInspectionList(query) {
        console.log('query: ', query);
        const search = new quality_inspection_vo_1.QualityInspectionSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.qualityInspectionService.getQualityInspectionList(search);
    }
    async getQualityInspectionAll() {
        return await this.qualityInspectionService.getQualityInspectionAll();
    }
    async getQualityInspectionAllView() {
        return await this.qualityInspectionService.getQualityInspectionAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createQualityInspection'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quality_inspection_vo_1.QualityInspectionVo]),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "createQualityInspection", null);
__decorate([
    (0, common_1.Put)('/updateQualityInspection/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, quality_inspection_vo_1.QualityInspectionVo]),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "updateaQualityInspection", null);
__decorate([
    (0, common_1.Get)('/removeQualityInspection/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "removeQualityInspection", null);
__decorate([
    (0, common_1.Get)('/getQualityInspectionById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "getQualityInspectionById", null);
__decorate([
    (0, common_1.Get)('/getQualityInspection'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "getQualityInspectionList", null);
__decorate([
    (0, common_1.Get)('/getQualityInspectionAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "getQualityInspectionAll", null);
__decorate([
    (0, common_1.Get)('/getQualityInspectionAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QualityInspectionController.prototype, "getQualityInspectionAllView", null);
QualityInspectionController = __decorate([
    (0, common_1.Controller)('/qualityInspection')
], QualityInspectionController);
exports.QualityInspectionController = QualityInspectionController;
//# sourceMappingURL=quality_inspection_controller.js.map