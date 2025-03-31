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
exports.UnitController = void 0;
const common_1 = require("@nestjs/common");
const UnitService_1 = require("../myservices/UnitService");
const UnitVo_1 = require("../myvo/UnitVo");
let UnitController = class UnitController {
    constructor() {
        this.unitService = new UnitService_1.UnitService();
    }
    async createUnit(UnitVo) {
        return this.unitService.createUnit(UnitVo);
    }
    async updateaUnit(userToken, Id, UnitVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.unitService.updateaUnit(Id, userId, UnitVo);
    }
    async removeUnit(Id) {
        return this.unitService.removeUnit([Id]);
    }
    async getUnitById(Id) {
        return this.unitService.getUnitById(Id);
    }
    async getUnit(search) {
        return this.unitService.getUnit(search);
    }
    async getUnitAll(search) {
        return this.unitService.getUnitAll(search);
    }
    async getUnitAllView() {
        return this.unitService.getUnitAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createUnit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UnitVo_1.UnitVo]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "createUnit", null);
__decorate([
    (0, common_1.Put)('/updateUnit/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UnitVo_1.UnitVo]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "updateaUnit", null);
__decorate([
    (0, common_1.Get)('/removeUnit/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "removeUnit", null);
__decorate([
    (0, common_1.Get)('/getUnitById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnitById", null);
__decorate([
    (0, common_1.Get)('/getUnit'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UnitVo_1.UnitSearchVo]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnit", null);
__decorate([
    (0, common_1.Get)('/getUnitAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UnitVo_1.UnitSearchVo]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnitAll", null);
__decorate([
    (0, common_1.Get)('/getUnitAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnitAllView", null);
UnitController = __decorate([
    (0, common_1.Controller)('/unit')
], UnitController);
exports.UnitController = UnitController;
//# sourceMappingURL=UnitController.js.map