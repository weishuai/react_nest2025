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
exports.HrContractController = void 0;
const common_1 = require("@nestjs/common");
const hr_contract_service_1 = require("../myservices/hr.contract_service");
const hr_contract_vo_1 = require("../myvo/hr.contract_vo");
let HrContractController = class HrContractController {
    constructor() {
        this.hrContractService = new hr_contract_service_1.HrContractService();
    }
    async createHrContract(hrContractVo) {
        console.log('Body: ', hrContractVo);
        return await this.hrContractService.createHrContract(hrContractVo);
    }
    async updateaHrContract(userToken, Id, hrContractVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('HrContractVo: ', hrContractVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.hrContractService.updateaHrContract(Id, userId, hrContractVo);
    }
    async removeHrContract(Id) {
        return await this.hrContractService.removeHrContract(Id);
    }
    async getHrContractById(Id) {
        return await this.hrContractService.getHrContractById(Id);
    }
    async getHrContractList(query) {
        console.log('query: ', query);
        const search = new hr_contract_vo_1.HrContractSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.hrContractService.getHrContractList(search);
    }
    async getHrContractAll() {
        return await this.hrContractService.getHrContractAll();
    }
    async getHrContractAllView() {
        return await this.hrContractService.getHrContractAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createHrContract'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hr_contract_vo_1.HrContractVo]),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "createHrContract", null);
__decorate([
    (0, common_1.Put)('/updateHrContract/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, hr_contract_vo_1.HrContractVo]),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "updateaHrContract", null);
__decorate([
    (0, common_1.Get)('/removeHrContract/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "removeHrContract", null);
__decorate([
    (0, common_1.Get)('/getHrContractById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "getHrContractById", null);
__decorate([
    (0, common_1.Get)('/getHrContract'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "getHrContractList", null);
__decorate([
    (0, common_1.Get)('/getHrContractAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "getHrContractAll", null);
__decorate([
    (0, common_1.Get)('/getHrContractAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HrContractController.prototype, "getHrContractAllView", null);
HrContractController = __decorate([
    (0, common_1.Controller)('/hrContract')
], HrContractController);
exports.HrContractController = HrContractController;
//# sourceMappingURL=hr.contract_controller.js.map