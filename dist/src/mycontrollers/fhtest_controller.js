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
exports.FhtestController = void 0;
const common_1 = require("@nestjs/common");
const fhtest_service_1 = require("../myservices/fhtest_service");
const fhtest_vo_1 = require("../myvo/fhtest_vo");
let FhtestController = class FhtestController {
    constructor() {
        this.fhtestService = new fhtest_service_1.FhtestService();
    }
    async createFhtest(fhtestVo) {
        console.log('Body: ', fhtestVo);
        return await this.fhtestService.createFhtest(fhtestVo);
    }
    async updateaFhtest(userToken, Id, fhtestVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhtestVo: ', fhtestVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhtestService.updateaFhtest(Id, userId, fhtestVo);
    }
    async removeFhtest(Id) {
        return await this.fhtestService.removeFhtest(Id);
    }
    async getFhtestById(Id) {
        return await this.fhtestService.getFhtestById(Id);
    }
    async getFhtestList(query) {
        console.log('query: ', query);
        const search = new fhtest_vo_1.FhtestSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhtestService.getFhtestList(search);
    }
    async getFhtestAll() {
        return await this.fhtestService.getFhtestAll();
    }
    async getFhtestAllView() {
        return await this.fhtestService.getFhtestAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhtest'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhtest_vo_1.FhtestVo]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "createFhtest", null);
__decorate([
    (0, common_1.Put)('/updateFhtest/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhtest_vo_1.FhtestVo]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "updateaFhtest", null);
__decorate([
    (0, common_1.Get)('/removeFhtest/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "removeFhtest", null);
__decorate([
    (0, common_1.Get)('/getFhtestById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "getFhtestById", null);
__decorate([
    (0, common_1.Get)('/getFhtest'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "getFhtestList", null);
__decorate([
    (0, common_1.Get)('/getFhtestAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "getFhtestAll", null);
__decorate([
    (0, common_1.Get)('/getFhtestAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "getFhtestAllView", null);
FhtestController = __decorate([
    (0, common_1.Controller)('/fhtest')
], FhtestController);
exports.FhtestController = FhtestController;
//# sourceMappingURL=fhtest_controller.js.map