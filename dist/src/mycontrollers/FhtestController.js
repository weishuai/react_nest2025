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
exports.FhtestController = void 0;
const common_1 = require("@nestjs/common");
const FhtestService_1 = require("../myservices/FhtestService");
const FhtestVo_1 = require("../myvo/FhtestVo");
let FhtestController = class FhtestController {
    constructor() {
        this.fhtestService = new FhtestService_1.FhtestService();
    }
    async createFhtest(fhtestVo) {
        return this.fhtestService.createFhtest(fhtestVo);
    }
    async update_Fhtest(Id, fhtestVo) {
        return this.fhtestService.updateFhtest(Id, fhtestVo);
    }
    async removeFhtest(Id) {
        return this.fhtestService.removeFhtest([Id]);
    }
};
__decorate([
    (0, common_1.Put)('/createFhtest'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FhtestVo_1.FhtestAddVo]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "createFhtest", null);
__decorate([
    (0, common_1.Put)('/update_Fhtest/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, FhtestVo_1.FhtestAddVo]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "update_Fhtest", null);
__decorate([
    (0, common_1.Get)('/removeFhtest/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FhtestController.prototype, "removeFhtest", null);
FhtestController = __decorate([
    (0, common_1.Controller)('/fhtest')
], FhtestController);
exports.FhtestController = FhtestController;
//# sourceMappingURL=FhtestController.js.map