"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsMemberService = void 0;
const myrepositories_1 = require("../myrepositories");
class TermsMemberService {
    constructor() {
        this.termsMemberRepo = new myrepositories_1.TermsMemberRepo();
    }
    async findOneTermsMember(Id) {
        return this.termsMemberRepo.getTermsMembersById(Id);
    }
    async createTermsMember(termsMemberVo) {
        return this.termsMemberRepo.create(termsMemberVo);
    }
    async updateaTermsMember(Id, user_id, termsMemberVo) {
        termsMemberVo.updatedAt = new Date();
        termsMemberVo.updatedUid = user_id;
        return this.termsMemberRepo.update(Id, user_id, termsMemberVo);
    }
    async removeTermsMember(Ids) {
        return this.termsMemberRepo.remove(Ids);
    }
    async getTermsMemberById(id) {
        return this.termsMemberRepo.getTermsMembersById(id);
    }
    async getTermsMember(search) {
        return this.termsMemberRepo.getTermsMember(search);
    }
    async getTermsMemberAll(search) {
        return this.termsMemberRepo.getTermsMemberAll(search);
    }
    async getTermsMemberAllView() {
        return this.termsMemberRepo.getTermsMemberAllView();
    }
}
exports.TermsMemberService = TermsMemberService;
//# sourceMappingURL=TermsMemberService.js.map