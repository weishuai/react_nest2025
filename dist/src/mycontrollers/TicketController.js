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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const TicketService_1 = require("../myservices/TicketService");
const TicketVo_1 = require("../myvo/TicketVo");
let TicketController = class TicketController {
    constructor() {
        this.ticketService = new TicketService_1.TicketService();
    }
    async createTicket(TicketVo) {
        return this.ticketService.createTicket(TicketVo);
    }
    async updateaTicket(userToken, Id, TicketVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.ticketService.updateaTicket(Id, userId, TicketVo);
    }
    async removeTicket(Id) {
        return this.ticketService.removeTicket([Id]);
    }
    async getTicketById(Id) {
        return this.ticketService.getTicketById(Id);
    }
    async getTicket(search) {
        return this.ticketService.getTicket(search);
    }
    async getTicketAll(search) {
        return this.ticketService.getTicketAll(search);
    }
    async getTicketAllView() {
        return this.ticketService.getTicketAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createTicket'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketVo_1.TicketVo]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Put)('/updateTicket/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, TicketVo_1.TicketVo]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateaTicket", null);
__decorate([
    (0, common_1.Get)('/removeTicket/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "removeTicket", null);
__decorate([
    (0, common_1.Get)('/getTicketById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicketById", null);
__decorate([
    (0, common_1.Get)('/getTicket'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketVo_1.TicketSearchVo]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicket", null);
__decorate([
    (0, common_1.Get)('/getTicketAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketVo_1.TicketSearchVo]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicketAll", null);
__decorate([
    (0, common_1.Get)('/getTicketAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicketAllView", null);
TicketController = __decorate([
    (0, common_1.Controller)('/ticket')
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=TicketController.js.map