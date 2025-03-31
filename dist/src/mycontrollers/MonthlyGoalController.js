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
exports.MonthlyGoalController = void 0;
const common_1 = require("@nestjs/common");
const MonthlyGoalService_1 = require("../myservices/MonthlyGoalService");
const MonthlyGoalVo_1 = require("../myvo/MonthlyGoalVo");
let MonthlyGoalController = class MonthlyGoalController {
    constructor() {
        this.monthlyGoalService = new MonthlyGoalService_1.MonthlyGoalService();
    }
    async createMonthlyGoal(MonthlyGoalVo) {
        return this.monthlyGoalService.createMonthlyGoal(MonthlyGoalVo);
    }
    async updateaMonthlyGoal(userToken, Id, MonthlyGoalVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.monthlyGoalService.updateaMonthlyGoal(Id, userId, MonthlyGoalVo);
    }
    async removeMonthlyGoal(Id) {
        return this.monthlyGoalService.removeMonthlyGoal([Id]);
    }
    async getMonthlyGoalById(Id) {
        return this.monthlyGoalService.getMonthlyGoalById(Id);
    }
    async getMonthlyGoal(search) {
        return this.monthlyGoalService.getMonthlyGoal(search);
    }
    async getMonthlyGoalAll(search) {
        return this.monthlyGoalService.getMonthlyGoalAll(search);
    }
};
__decorate([
    (0, common_1.Post)('/createMonthlyGoal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MonthlyGoalVo_1.MonthlyGoalVo]),
    __metadata("design:returntype", Promise)
], MonthlyGoalController.prototype, "createMonthlyGoal", null);
__decorate([
    (0, common_1.Put)('/updateMonthlyGoal/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, MonthlyGoalVo_1.MonthlyGoalVo]),
    __metadata("design:returntype", Promise)
], MonthlyGoalController.prototype, "updateaMonthlyGoal", null);
__decorate([
    (0, common_1.Get)('/removeMonthlyGoal/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MonthlyGoalController.prototype, "removeMonthlyGoal", null);
__decorate([
    (0, common_1.Get)('/getMonthlyGoalById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MonthlyGoalController.prototype, "getMonthlyGoalById", null);
__decorate([
    (0, common_1.Get)('/getMonthlyGoal'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MonthlyGoalVo_1.MonthlyGoalSearchVo]),
    __metadata("design:returntype", Promise)
], MonthlyGoalController.prototype, "getMonthlyGoal", null);
__decorate([
    (0, common_1.Get)('/getMonthlyGoalAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MonthlyGoalVo_1.MonthlyGoalSearchVo]),
    __metadata("design:returntype", Promise)
], MonthlyGoalController.prototype, "getMonthlyGoalAll", null);
MonthlyGoalController = __decorate([
    (0, common_1.Controller)('/monthlyGoal')
], MonthlyGoalController);
exports.MonthlyGoalController = MonthlyGoalController;
//# sourceMappingURL=MonthlyGoalController.js.map