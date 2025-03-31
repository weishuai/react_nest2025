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
exports.FeedbackController = void 0;
const common_1 = require("@nestjs/common");
const FeedbackService_1 = require("../myservices/FeedbackService");
const FeedbackVo_1 = require("../myvo/FeedbackVo");
let FeedbackController = class FeedbackController {
    constructor() {
        this.feedbackService = new FeedbackService_1.FeedbackService();
    }
    async createFeedback(FeedbackVo) {
        return this.feedbackService.createFeedback(FeedbackVo);
    }
    async updateaFeedback(userToken, Id, FeedbackVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.feedbackService.updateaFeedback(Id, userId, FeedbackVo);
    }
    async removeFeedback(Id) {
        return this.feedbackService.removeFeedback([Id]);
    }
    async getFeedbackById(Id) {
        return this.feedbackService.getFeedbackById(Id);
    }
    async getFeedback(search) {
        return this.feedbackService.getFeedback(search);
    }
    async getFeedbackAll(search) {
        return this.feedbackService.getFeedbackAll(search);
    }
    async getFeedbackAllView() {
        return this.feedbackService.getFeedbackAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createFeedback'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FeedbackVo_1.FeedbackVo]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "createFeedback", null);
__decorate([
    (0, common_1.Put)('/updateFeedback/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, FeedbackVo_1.FeedbackVo]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "updateaFeedback", null);
__decorate([
    (0, common_1.Get)('/removeFeedback/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "removeFeedback", null);
__decorate([
    (0, common_1.Get)('/getFeedbackById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "getFeedbackById", null);
__decorate([
    (0, common_1.Get)('/getFeedback'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FeedbackVo_1.FeedbackSearchVo]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "getFeedback", null);
__decorate([
    (0, common_1.Get)('/getFeedbackAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FeedbackVo_1.FeedbackSearchVo]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "getFeedbackAll", null);
__decorate([
    (0, common_1.Get)('/getFeedbackAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "getFeedbackAllView", null);
FeedbackController = __decorate([
    (0, common_1.Controller)('/feedback')
], FeedbackController);
exports.FeedbackController = FeedbackController;
//# sourceMappingURL=FeedbackController.js.map