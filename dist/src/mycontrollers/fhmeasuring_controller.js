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
exports.FhmeasuringController = void 0;
const common_1 = require("@nestjs/common");
const fhmeasuring_service_1 = require("../myservices/fhmeasuring_service");
const fhmeasuring_vo_1 = require("../myvo/fhmeasuring_vo");
let FhmeasuringController = class FhmeasuringController {
    constructor() {
        this.fhmeasuringService = new fhmeasuring_service_1.FhmeasuringService();
    }
    async createFhmeasuring(fhmeasuringVo) {
        console.log('Body: ', fhmeasuringVo);
        return await this.fhmeasuringService.createFhmeasuring(fhmeasuringVo);
    }
    async updateaFhmeasuring(userToken, Id, fhmeasuringVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhmeasuringVo: ', fhmeasuringVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhmeasuringService.updateaFhmeasuring(Id, userId, fhmeasuringVo);
    }
    async removeFhmeasuring(Id) {
        return await this.fhmeasuringService.removeFhmeasuring(Id);
    }
    async getFhmeasuringById(Id) {
        return await this.fhmeasuringService.getFhmeasuringById(Id);
    }
    async getFhmeasuringList(query) {
        console.log('query: ', query);
        const search = new fhmeasuring_vo_1.FhmeasuringSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhmeasuringService.getFhmeasuringList(search);
    }
    async getFhmeasuringAll() {
        return await this.fhmeasuringService.getFhmeasuringAll();
    }
    async getFhmeasuringAllView() {
        return await this.fhmeasuringService.getFhmeasuringAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhmeasuring'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhmeasuring_vo_1.FhmeasuringVo]),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "createFhmeasuring", null);
__decorate([
    (0, common_1.Put)('/updateFhmeasuring/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhmeasuring_vo_1.FhmeasuringVo]),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "updateaFhmeasuring", null);
__decorate([
    (0, common_1.Get)('/removeFhmeasuring/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "removeFhmeasuring", null);
__decorate([
    (0, common_1.Get)('/getFhmeasuringById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "getFhmeasuringById", null);
__decorate([
    (0, common_1.Get)('/getFhmeasuring'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "getFhmeasuringList", null);
__decorate([
    (0, common_1.Get)('/getFhmeasuringAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "getFhmeasuringAll", null);
__decorate([
    (0, common_1.Get)('/getFhmeasuringAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhmeasuringController.prototype, "getFhmeasuringAllView", null);
FhmeasuringController = __decorate([
    (0, common_1.Controller)('/fhmeasuring')
], FhmeasuringController);
exports.FhmeasuringController = FhmeasuringController;
//# sourceMappingURL=fhmeasuring_controller.js.map