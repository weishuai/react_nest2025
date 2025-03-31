"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTagService = void 0;
const account_tag_repo_1 = require("../myrepositories/account.tag.repo");
class AccountTagService {
    constructor() {
        this.accountTagRepo = new account_tag_repo_1.AccountTagRepo();
    }
    async findOneAccountTag(Id) {
        return await this.accountTagRepo.getAccountTagsById(Id);
    }
    async createAccountTag(accountTagVo) {
        return await this.accountTagRepo.create(accountTagVo);
    }
    async updateaAccountTag(Id, user_id, accountTagVo) {
        return await this.accountTagRepo.update(Id, user_id, accountTagVo);
    }
    async removeAccountTag(Ids) {
        console.log(Ids);
        return await this.accountTagRepo.remove([Ids]);
    }
    async getAccountTagById(id) {
        return await this.accountTagRepo.getAccountTagsById(id);
    }
    async getAccountTagList(search) {
        return await this.accountTagRepo.getAccountTagList(search);
    }
    async getAccountTagAll(search) {
        return await this.accountTagRepo.getAccountTagAll(search);
    }
    async getAccountTagAllView() {
        return await this.accountTagRepo.getAccountTagAllView();
    }
}
exports.AccountTagService = AccountTagService;
//# sourceMappingURL=account.tag.service.js.map