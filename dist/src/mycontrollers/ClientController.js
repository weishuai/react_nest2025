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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const ClientService_1 = require("../myservices/ClientService");
const ClientVo_1 = require("../myvo/ClientVo");
let ClientController = class ClientController {
    constructor() {
        this.clientService = new ClientService_1.ClientService();
    }
    async createClient(ClientVo) {
        return this.clientService.createClient(ClientVo);
    }
    async updateaClient(userToken, Id, ClientVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        console.info("后台接收:1");
        console.info(JSON.stringify(ClientVo));
        return this.clientService.updateaClient(Id, userId, ClientVo);
    }
    async removeClient(Id) {
        return this.clientService.removeClient([Id]);
    }
    async getClientById(Id) {
        return this.clientService.getClientById(Id);
    }
    async getClient(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.clientService.getClient(userId, search);
    }
    async getClientv2(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.clientService.getClient(userId, search);
    }
    async getClientv2SQL(userToken, search) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.clientService.getClientSQL(userId, search);
    }
    async getClientAll(search) {
        return this.clientService.getClientAll(search);
    }
    async getClientAllView() {
        return this.clientService.getClientAllView();
    }
};
__decorate([
    (0, common_1.Post)('/createClient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ClientVo_1.ClientVo]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "createClient", null);
__decorate([
    (0, common_1.Put)('/updateClient/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ClientVo_1.ClientVo]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "updateaClient", null);
__decorate([
    (0, common_1.Get)('/removeClient/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "removeClient", null);
__decorate([
    (0, common_1.Get)('/getClientById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientById", null);
__decorate([
    (0, common_1.Get)('/getClient'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ClientVo_1.ClientSearchVo]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClient", null);
__decorate([
    (0, common_1.Get)('/getClientv2'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ClientVo_1.ClientSearchVo]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientv2", null);
__decorate([
    (0, common_1.Get)('/getClientv2SQL'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ClientVo_1.FHClientSearchVo]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientv2SQL", null);
__decorate([
    (0, common_1.Get)('/getClientAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ClientVo_1.ClientSearchVo]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientAll", null);
__decorate([
    (0, common_1.Get)('/getClientAllView'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientAllView", null);
ClientController = __decorate([
    (0, common_1.Controller)('/client')
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=ClientController.js.map