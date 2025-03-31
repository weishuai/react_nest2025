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
exports.FhinspectionController = void 0;
const common_1 = require("@nestjs/common");
const fhinspection_service_1 = require("../myservices/fhinspection_service");
const fhinspection_vo_1 = require("../myvo/fhinspection_vo");
let FhinspectionController = class FhinspectionController {
    constructor() {
        this.fhinspectionService = new fhinspection_service_1.FhinspectionService();
    }
    async createFhinspection(fhinspectionVo) {
        console.log('Body: ', fhinspectionVo);
        return await this.fhinspectionService.createFhinspection(fhinspectionVo);
    }
    async updateaFhinspection(userToken, Id, fhinspectionVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhinspectionVo: ', fhinspectionVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhinspectionService.updateaFhinspection(Id, userId, fhinspectionVo);
    }
    async removeFhinspection(Id) {
        return await this.fhinspectionService.removeFhinspection(Id);
    }
    async getFhinspectionById(Id) {
        return await this.fhinspectionService.getFhinspectionById(Id);
    }
    async getFhinspectionList(query) {
        console.log('query: ', query);
        const search = new fhinspection_vo_1.FhinspectionSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhinspectionService.getFhinspectionList(search);
    }
    async getFhinspectionAll() {
        return await this.fhinspectionService.getFhinspectionAll();
    }
    async getFhinspectionAllView() {
        return await this.fhinspectionService.getFhinspectionAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhinspection'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhinspection_vo_1.FhinspectionVo]),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "createFhinspection", null);
__decorate([
    (0, common_1.Put)('/updateFhinspection/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhinspection_vo_1.FhinspectionVo]),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "updateaFhinspection", null);
__decorate([
    (0, common_1.Get)('/removeFhinspection/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "removeFhinspection", null);
__decorate([
    (0, common_1.Get)('/getFhinspectionById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "getFhinspectionById", null);
__decorate([
    (0, common_1.Get)('/getFhinspection'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "getFhinspectionList", null);
__decorate([
    (0, common_1.Get)('/getFhinspectionAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "getFhinspectionAll", null);
__decorate([
    (0, common_1.Get)('/getFhinspectionAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhinspectionController.prototype, "getFhinspectionAllView", null);
FhinspectionController = __decorate([
    (0, common_1.Controller)('/fhinspection')
], FhinspectionController);
exports.FhinspectionController = FhinspectionController;
//# sourceMappingURL=fhinspection_controller.js.map