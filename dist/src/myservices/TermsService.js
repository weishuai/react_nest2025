"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsService = void 0;
const myrepositories_1 = require("../myrepositories");
class TermsService {
    constructor() {
        this.TermsRepo = new myrepositories_1.TermsRepo();
    }
    async findOneTerms(Id) {
        return this.TermsRepo.gettermssById(Id);
    }
    async createTerms(TermsVo) {
        return this.TermsRepo.create(TermsVo);
    }
    async updateaTerms(Id, user_id, termsVo) {
        termsVo.updatedAt = new Date();
        termsVo.updatedUid = user_id;
        return this.TermsRepo.update(Id, user_id, termsVo);
    }
    async removeTerms(Ids) {
        return this.TermsRepo.remove(Ids);
    }
    async getTermsById(id) {
        return this.TermsRepo.gettermssById(id);
    }
    async getTerms(search) {
        return this.TermsRepo.getterms(search);
    }
    async getTermsAll(search) {
        return this.TermsRepo.gettermsAll(search);
    }
    async getTermsAllView() {
        return this.TermsRepo.gettermsAllView();
    }
}
exports.TermsService = TermsService;
//# sourceMappingURL=TermsService.js.map