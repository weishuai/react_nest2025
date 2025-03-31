"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const myrepositories_1 = require("../myrepositories");
class ClientService {
    constructor() {
        this.clientRepo = new myrepositories_1.ClientRepo();
    }
    async findOneclient(Id) {
        return this.clientRepo.getClientById(Id);
    }
    async createClient(clientVo) {
        return this.clientRepo.create(clientVo);
    }
    async updateaClient(Id, user_id, clientVo) {
        clientVo.updatedAt = new Date();
        clientVo.updatedUid = user_id;
        return this.clientRepo.update(Id, user_id, clientVo);
    }
    async removeClient(Ids) {
        return this.clientRepo.remove(Ids);
    }
    async getClientById(id) {
        return this.clientRepo.getClientById(id);
    }
    async getClient(userId, search) {
        return this.clientRepo.getClient(userId, search);
    }
    async getClientSQL(userId, search) {
        return this.clientRepo.getClientSQL(userId, search);
    }
    async getClientAll(search) {
        return this.clientRepo.getClientAll(search);
    }
    async getClientAllView() {
        return this.clientRepo.getClientAllView();
    }
}
exports.ClientService = ClientService;
//# sourceMappingURL=ClientService.js.map