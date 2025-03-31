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
exports.myWorkCenterController = void 0;
const common_1 = require("@nestjs/common");
const mywork_center_service_1 = require("../myservices/mywork_center_service");
const mywork_center_vo_1 = require("../myvo/mywork_center_vo");
let myWorkCenterController = class myWorkCenterController {
    constructor() {
        this.myworkCenterService = new mywork_center_service_1.myWorkCenterService();
    }
    async createmyWorkCenter(myworkCenterVo) {
        console.log('Body: ', myworkCenterVo);
        return await this.myworkCenterService.createmyWorkCenter(myworkCenterVo);
    }
    async updateamyWorkCenter(userToken, Id, myworkCenterVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('myWorkCenterVo: ', myworkCenterVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.myworkCenterService.updateamyWorkCenter(Id, userId, myworkCenterVo);
    }
    async removemyWorkCenter(Id) {
        return await this.myworkCenterService.removemyWorkCenter(Id);
    }
    async getmyWorkCenterById(Id) {
        return await this.myworkCenterService.getmyWorkCenterById(Id);
    }
    async getmyWorkCenterList(query) {
        console.log('query: ', query);
        const search = new mywork_center_vo_1.myWorkCenterSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.myworkCenterService.getmyWorkCenterList(search);
    }
    async getmyWorkCenterAll() {
        return await this.myworkCenterService.getmyWorkCenterAll();
    }
    async getmyWorkCenterAllView() {
        return await this.myworkCenterService.getmyWorkCenterAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createmyWorkCenter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mywork_center_vo_1.myWorkCenterVo]),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "createmyWorkCenter", null);
__decorate([
    (0, common_1.Put)('/updatemyWorkCenter/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, mywork_center_vo_1.myWorkCenterVo]),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "updateamyWorkCenter", null);
__decorate([
    (0, common_1.Get)('/removemyWorkCenter/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "removemyWorkCenter", null);
__decorate([
    (0, common_1.Get)('/getmyWorkCenterById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "getmyWorkCenterById", null);
__decorate([
    (0, common_1.Get)('/getmyWorkCenter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "getmyWorkCenterList", null);
__decorate([
    (0, common_1.Get)('/getmyWorkCenterAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "getmyWorkCenterAll", null);
__decorate([
    (0, common_1.Get)('/getmyWorkCenterAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], myWorkCenterController.prototype, "getmyWorkCenterAllView", null);
myWorkCenterController = __decorate([
    (0, common_1.Controller)('/myworkCenter')
], myWorkCenterController);
exports.myWorkCenterController = myWorkCenterController;
//# sourceMappingURL=mywork_center_controller.js.map