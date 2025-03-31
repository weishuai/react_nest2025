"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttenceService = void 0;
const myrepositories_1 = require("../myrepositories");
class AttenceService {
    constructor() {
        this.attenceRepo = new myrepositories_1.AttenceRepo();
    }
    async findOneAttence(Id) {
        return this.attenceRepo.getAttencesById(Id);
    }
    async createAttence(attenceVo) {
        return this.attenceRepo.create(attenceVo);
    }
    async updateaAttence(Id, user_id, attenceVo) {
        attenceVo.updatedAt = new Date();
        attenceVo.updatedUid = user_id;
        return this.attenceRepo.update(Id, user_id, attenceVo);
    }
    async removeAttence(Ids) {
        return this.attenceRepo.remove(Ids);
    }
    async getAttenceById(id) {
        return this.attenceRepo.getAttencesById(id);
    }
    async getAttence(search) {
        return this.attenceRepo.getAttence(search);
    }
    async getAttenceAll(search) {
        return this.attenceRepo.getAttenceAll(search);
    }
    async getAttenceAllView() {
        return this.attenceRepo.getAttenceAllView();
    }
}
exports.AttenceService = AttenceService;
//# sourceMappingURL=AttenceService.js.map