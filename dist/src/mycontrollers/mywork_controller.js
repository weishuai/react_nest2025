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
exports.myWorkController = void 0;
const common_1 = require("@nestjs/common");
const mywork_service_1 = require("../myservices/mywork_service");
const mywork_vo_1 = require("../myvo/mywork_vo");
let myWorkController = class myWorkController {
    constructor() {
        this.myworkService = new mywork_service_1.myWorkService();
    }
    async createmyWork(myworkVo) {
        console.log('Body: ', myworkVo);
        return await this.myworkService.createmyWork(myworkVo);
    }
    async updateamyWork(userToken, Id, myworkVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('myWorkVo: ', myworkVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.myworkService.updateamyWork(Id, userId, myworkVo);
    }
    async removemyWork(Id) {
        return await this.myworkService.removemyWork(Id);
    }
    async getmyWorkById(Id) {
        return await this.myworkService.getmyWorkById(Id);
    }
    async getmyWorkList(query) {
        console.log('query: ', query);
        const search = new mywork_vo_1.myWorkSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.myworkService.getmyWorkList(search);
    }
    async getmyWorkAll() {
        return await this.myworkService.getmyWorkAll();
    }
    async getmyWorkAllView() {
        return await this.myworkService.getmyWorkAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createmyWork'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mywork_vo_1.myWorkVo]),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "createmyWork", null);
__decorate([
    (0, common_1.Put)('/updatemyWork/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, mywork_vo_1.myWorkVo]),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "updateamyWork", null);
__decorate([
    (0, common_1.Get)('/removemyWork/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "removemyWork", null);
__decorate([
    (0, common_1.Get)('/getmyWorkById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "getmyWorkById", null);
__decorate([
    (0, common_1.Get)('/getmyWork'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "getmyWorkList", null);
__decorate([
    (0, common_1.Get)('/getmyWorkAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "getmyWorkAll", null);
__decorate([
    (0, common_1.Get)('/getmyWorkAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], myWorkController.prototype, "getmyWorkAllView", null);
myWorkController = __decorate([
    (0, common_1.Controller)('/mywork')
], myWorkController);
exports.myWorkController = myWorkController;
//# sourceMappingURL=mywork_controller.js.map