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
exports.StaffListController = void 0;
const common_1 = require("@nestjs/common");
const StaffListService_1 = require("../myservices/StaffListService");
const StaffListVo_1 = require("../myvo/StaffListVo");
let StaffListController = class StaffListController {
    constructor() {
        this.staffListService = new StaffListService_1.StaffListService();
    }
    async createStaffList(StaffListVo) {
        return this.staffListService.createStaffList(StaffListVo);
    }
    async updateaStaffList(userToken, Id, StaffListVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.staffListService.updateaStaffList(Id, userId, StaffListVo);
    }
    async removeStaffList(Id) {
        return this.staffListService.removeStaffList([Id]);
    }
    async getStaffListById(Id) {
        return this.staffListService.getStaffListById(Id);
    }
    async getStaffList(search) {
        return this.staffListService.getStaffList(search);
    }
    async getStaffListAll(search) {
        return this.staffListService.getStaffListAll(search);
    }
    async getStaffListAllView() {
        return this.staffListService.getStaffListAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createStaffList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StaffListVo_1.StaffListVo]),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "createStaffList", null);
__decorate([
    (0, common_1.Put)('/updateStaffList/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, StaffListVo_1.StaffListVo]),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "updateaStaffList", null);
__decorate([
    (0, common_1.Get)('/removeStaffList/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "removeStaffList", null);
__decorate([
    (0, common_1.Get)('/getStaffListById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "getStaffListById", null);
__decorate([
    (0, common_1.Get)('/getStaffList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StaffListVo_1.StaffListSearchVo]),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "getStaffList", null);
__decorate([
    (0, common_1.Get)('/getStaffListAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StaffListVo_1.StaffListSearchVo]),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "getStaffListAll", null);
__decorate([
    (0, common_1.Get)('/getStaffListAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StaffListController.prototype, "getStaffListAllView", null);
StaffListController = __decorate([
    (0, common_1.Controller)('/staffList')
], StaffListController);
exports.StaffListController = StaffListController;
//# sourceMappingURL=StaffListController.js.map