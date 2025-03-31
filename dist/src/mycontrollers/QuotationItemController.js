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
exports.QuotationItemController = void 0;
const common_1 = require("@nestjs/common");
const QuotationItemService_1 = require("../myservices/QuotationItemService");
const QuotationItemVo_1 = require("../myvo/QuotationItemVo");
let QuotationItemController = class QuotationItemController {
    constructor() {
        this.quotationItemService = new QuotationItemService_1.QuotationItemService();
    }
    async createQuotationItem(QuotationItemVo) {
        return this.quotationItemService.createQuotationItem(QuotationItemVo);
    }
    async updateaQuotationItem(userToken, Id, QuotationItemVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.quotationItemService.updateaQuotationItem(Id, userId, QuotationItemVo);
    }
    async removeQuotationItem(Id) {
        return this.quotationItemService.removeQuotationItem([Id]);
    }
    async getQuotationItemById(Id) {
        return this.quotationItemService.getQuotationItemById(Id);
    }
    async getQuotationItemsAllByMid(mid) {
        return this.quotationItemService.getQuotationItemsAllByMid(mid);
    }
    async getQuotationItem(search) {
        return this.quotationItemService.getQuotationItem(search);
    }
    async getQuotationItemAll(search) {
        return this.quotationItemService.getQuotationItemAll(search);
    }
    async getQuotationItemAllView() {
        return this.quotationItemService.getQuotationItemAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createQuotationItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationItemVo_1.QuotationItemVo]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "createQuotationItem", null);
__decorate([
    (0, common_1.Put)('/updateQuotationItem/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, QuotationItemVo_1.QuotationItemVo]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "updateaQuotationItem", null);
__decorate([
    (0, common_1.Get)('/removeQuotationItem/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "removeQuotationItem", null);
__decorate([
    (0, common_1.Get)('/getQuotationItemById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "getQuotationItemById", null);
__decorate([
    (0, common_1.Get)('/getQuotationItemsAllByMid/:mid'),
    __param(0, (0, common_1.Param)('mid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "getQuotationItemsAllByMid", null);
__decorate([
    (0, common_1.Get)('/getQuotationItem'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationItemVo_1.QuotationItemSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "getQuotationItem", null);
__decorate([
    (0, common_1.Get)('/getQuotationItemAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuotationItemVo_1.QuotationItemSearchVo]),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "getQuotationItemAll", null);
__decorate([
    (0, common_1.Get)('/getQuotationItemAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuotationItemController.prototype, "getQuotationItemAllView", null);
QuotationItemController = __decorate([
    (0, common_1.Controller)('/quotationItem')
], QuotationItemController);
exports.QuotationItemController = QuotationItemController;
//# sourceMappingURL=QuotationItemController.js.map