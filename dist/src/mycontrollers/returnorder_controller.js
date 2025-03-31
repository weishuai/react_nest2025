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
exports.ReturnorderController = void 0;
const common_1 = require("@nestjs/common");
const returnorder_service_1 = require("../myservices/returnorder_service");
const returnorder_vo_1 = require("../myvo/returnorder_vo");
let ReturnorderController = class ReturnorderController {
    constructor() {
        this.returnorderService = new returnorder_service_1.ReturnorderService();
    }
    async createReturnorder(returnorderVo) {
        console.log('Body: ', returnorderVo);
        return await this.returnorderService.createReturnorder(returnorderVo);
    }
    async updateaReturnorder(userToken, Id, returnorderVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('ReturnorderVo: ', returnorderVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.returnorderService.updateaReturnorder(Id, userId, returnorderVo);
    }
    async removeReturnorder(Id) {
        return await this.returnorderService.removeReturnorder(Id);
    }
    async getReturnorderById(Id) {
        return await this.returnorderService.getReturnorderById(Id);
    }
    async getReturnorderList(query) {
        console.log('query: ', query);
        const search = new returnorder_vo_1.ReturnorderSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.returnorderService.getReturnorderList(search);
    }
    async getReturnorderAll() {
        return await this.returnorderService.getReturnorderAll();
    }
    async getReturnorderAllView() {
        return await this.returnorderService.getReturnorderAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createReturnorder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [returnorder_vo_1.ReturnorderVo]),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "createReturnorder", null);
__decorate([
    (0, common_1.Put)('/updateReturnorder/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, returnorder_vo_1.ReturnorderVo]),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "updateaReturnorder", null);
__decorate([
    (0, common_1.Get)('/removeReturnorder/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "removeReturnorder", null);
__decorate([
    (0, common_1.Get)('/getReturnorderById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "getReturnorderById", null);
__decorate([
    (0, common_1.Get)('/getReturnorder'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "getReturnorderList", null);
__decorate([
    (0, common_1.Get)('/getReturnorderAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "getReturnorderAll", null);
__decorate([
    (0, common_1.Get)('/getReturnorderAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReturnorderController.prototype, "getReturnorderAllView", null);
ReturnorderController = __decorate([
    (0, common_1.Controller)('/returnorder')
], ReturnorderController);
exports.ReturnorderController = ReturnorderController;
//# sourceMappingURL=returnorder_controller.js.map