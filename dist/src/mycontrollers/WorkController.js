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
exports.WorkController = void 0;
const common_1 = require("@nestjs/common");
const WorkService_1 = require("../myservices/WorkService");
const WorkVo_1 = require("../myvo/WorkVo");
let WorkController = class WorkController {
    constructor() {
        this.workService = new WorkService_1.WorkService();
    }
    async createWork(WorkVo) {
        return this.workService.createWork(WorkVo);
    }
    async updateaWork(userToken, Id, WorkVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        console.log('90002:' + JSON.stringify(WorkVo));
        return this.workService.updateaWork(Id, userId, WorkVo);
    }
    async removeWork(Id) {
        return this.workService.removeWork([Id]);
    }
    async getWorkById(Id) {
        return this.workService.getWorkById(Id);
    }
    async getWorkOrderBySqlStartDate(SqlStartDate) {
        return this.workService.getWorkOrderBySqlStartDate(SqlStartDate);
    }
    async getWork(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.workService.getWork(userId, search);
    }
    async getWorkAPP(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.workService.getWorkAPP(userId, search);
    }
    async getWorkAll(search) {
        return this.workService.getWorkAll(search);
    }
    async getWorkAllView() {
        return this.workService.getWorkAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createWork'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkVo_1.WorkVo]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "createWork", null);
__decorate([
    (0, common_1.Put)('/updateWork/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, WorkVo_1.WorkVo]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "updateaWork", null);
__decorate([
    (0, common_1.Get)('/removeWork/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "removeWork", null);
__decorate([
    (0, common_1.Get)('/getWorkById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWorkById", null);
__decorate([
    (0, common_1.Get)('/getWorkOrderBySqlStartDate/:SqlStartDate'),
    __param(0, (0, common_1.Param)('SqlStartDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWorkOrderBySqlStartDate", null);
__decorate([
    (0, common_1.Get)('/getWork'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, WorkVo_1.WorkSearchVo]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWork", null);
__decorate([
    (0, common_1.Get)('/getWorkAPP'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, WorkVo_1.WorkSearchVo]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWorkAPP", null);
__decorate([
    (0, common_1.Get)('/getWorkAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkVo_1.WorkSearchVo]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWorkAll", null);
__decorate([
    (0, common_1.Get)('/getWorkAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getWorkAllView", null);
WorkController = __decorate([
    (0, common_1.Controller)('/work')
], WorkController);
exports.WorkController = WorkController;
//# sourceMappingURL=WorkController.js.map