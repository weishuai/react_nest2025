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
exports.AccountTagController = void 0;
const common_1 = require("@nestjs/common");
const account_tag_service_1 = require("../myservices/account.tag.service");
const account_tgvo_1 = require("../myvo/account.tgvo");
let AccountTagController = class AccountTagController {
    constructor() {
        this.accountTagService = new account_tag_service_1.AccountTagService();
    }
    async createAccountTag(AccountTagVo) {
        console.log('Body: ', AccountTagVo);
        return await this.accountTagService.createAccountTag(AccountTagVo);
    }
    async updateaAccountTag(userToken, Id, AccountTagVo) {
        console.log('userToken: ', userToken);
        console.log('Id: ', Id);
        console.log('AccountTagVo: ', AccountTagVo);
        let userId = '';
        if (userToken != null && userToken != '') {
            userId = userToken;
        }
        return await this.accountTagService.updateaAccountTag(Id, userId, AccountTagVo);
    }
    async removeAccountTag(Id) {
        return await this.accountTagService.removeAccountTag(Id);
    }
    async getAccountTagById(Id) {
        return await this.accountTagService.getAccountTagById(Id);
    }
    async getAccountTagList(query) {
        console.log('query: ', query);
        const search = new account_tgvo_1.AccountTagSearchVo();
        search.search = query.search;
        search.pageIndex = Number(search.pageIndex != null ? search.pageIndex : 0);
        search.recordIndex = Number(search.recordIndex != null ? search.recordIndex : 0);
        search.pageSize = Number(search.pageSize != null ? search.pageSize : 0);
        console.log('fhok: ', JSON.stringify(search));
        return await this.accountTagService.getAccountTagList(search);
    }
    async getAccountTagAll(search) {
        return await this.accountTagService.getAccountTagAll(search);
    }
    async getAccountTagAllView() {
        return await this.accountTagService.getAccountTagAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createAccountTag'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_tgvo_1.AccountTagVo]),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "createAccountTag", null);
__decorate([
    (0, common_1.Put)('/updateAccountTag/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, account_tgvo_1.AccountTagVo]),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "updateaAccountTag", null);
__decorate([
    (0, common_1.Get)('/removeAccountTag/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "removeAccountTag", null);
__decorate([
    (0, common_1.Get)('/getAccountTagById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "getAccountTagById", null);
__decorate([
    (0, common_1.Get)('/getAccountTag'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "getAccountTagList", null);
__decorate([
    (0, common_1.Get)('/getAccountTagAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_tgvo_1.AccountTagSearchVo]),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "getAccountTagAll", null);
__decorate([
    (0, common_1.Get)('/getAccountTagAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountTagController.prototype, "getAccountTagAllView", null);
AccountTagController = __decorate([
    (0, common_1.Controller)('/accountTag')
], AccountTagController);
exports.AccountTagController = AccountTagController;
//# sourceMappingURL=account.tag.controller.js.map