"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContacPersonService = void 0;
const myrepositories_1 = require("../myrepositories");
class ContacPersonService {
    constructor() {
        this.contacPersonRepo = new myrepositories_1.ContacPersonRepo();
    }
    async findOneContacPerson(Id) {
        return this.contacPersonRepo.getContacPersonById(Id);
    }
    async createContacPerson(contacPersonVo) {
        return this.contacPersonRepo.create(contacPersonVo);
    }
    async updateaContacPerson(Id, user_id, contacPersonVo) {
        contacPersonVo.updatedAt = new Date();
        contacPersonVo.updatedUid = user_id;
        return this.contacPersonRepo.update(Id, user_id, contacPersonVo);
    }
    async removeContacPerson(Ids) {
        return this.contacPersonRepo.remove(Ids);
    }
    async getContacPersonById(id) {
        return this.contacPersonRepo.getContacPersonById(id);
    }
    async getContacPerson(userId, search) {
        return this.contacPersonRepo.getContacPerson(userId, search);
    }
    async getContacPersonAll(search) {
        return this.contacPersonRepo.getContacPersonAll(search);
    }
    async getContacPersonAllView() {
        return this.contacPersonRepo.getContacPersonAllView();
    }
}
exports.ContacPersonService = ContacPersonService;
//# sourceMappingURL=ContacPersonService.js.map