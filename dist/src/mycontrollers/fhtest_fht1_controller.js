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
exports.FhtestFht1Controller = void 0;
const common_1 = require("@nestjs/common");
const fhtest_fht1_service_1 = require("../myservices/fhtest_fht1_service");
const fhtest_fht1_vo_1 = require("../myvo/fhtest_fht1_vo");
let FhtestFht1Controller = class FhtestFht1Controller {
    constructor() {
        this.fhtestFht1Service = new fhtest_fht1_service_1.FhtestFht1Service();
    }
    async createFhtestFht1(fhtestFht1Vo) {
        console.log('Body: ', fhtestFht1Vo);
        return await this.fhtestFht1Service.createFhtestFht1(fhtestFht1Vo);
    }
    async updateaFhtestFht1(userToken, Id, fhtestFht1Vo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('FhtestFht1Vo: ', fhtestFht1Vo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.fhtestFht1Service.updateaFhtestFht1(Id, userId, fhtestFht1Vo);
    }
    async removeFhtestFht1(Id) {
        return await this.fhtestFht1Service.removeFhtestFht1(Id);
    }
    async getFhtestFht1ById(Id) {
        return await this.fhtestFht1Service.getFhtestFht1ById(Id);
    }
    async getFhtestFht1List(query) {
        console.log('query: ', query);
        const search = new fhtest_fht1_vo_1.FhtestFht1SearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.fhtestFht1Service.getFhtestFht1List(search);
    }
    async getFhtestFht1All() {
        return await this.fhtestFht1Service.getFhtestFht1All();
    }
    async getFhtestFht1AllView() {
        return await this.fhtestFht1Service.getFhtestFht1AllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFhtestFht1'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fhtest_fht1_vo_1.FhtestFht1Vo]),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "createFhtestFht1", null);
__decorate([
    (0, common_1.Put)('/updateFhtestFht1/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, fhtest_fht1_vo_1.FhtestFht1Vo]),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "updateaFhtestFht1", null);
__decorate([
    (0, common_1.Get)('/removeFhtestFht1/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "removeFhtestFht1", null);
__decorate([
    (0, common_1.Get)('/getFhtestFht1ById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "getFhtestFht1ById", null);
__decorate([
    (0, common_1.Get)('/getFhtestFht1'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "getFhtestFht1List", null);
__decorate([
    (0, common_1.Get)('/getFhtestFht1All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "getFhtestFht1All", null);
__decorate([
    (0, common_1.Get)('/getFhtestFht1AllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FhtestFht1Controller.prototype, "getFhtestFht1AllView", null);
FhtestFht1Controller = __decorate([
    (0, common_1.Controller)('/fhtestFht1')
], FhtestFht1Controller);
exports.FhtestFht1Controller = FhtestFht1Controller;
//# sourceMappingURL=fhtest_fht1_controller.js.map