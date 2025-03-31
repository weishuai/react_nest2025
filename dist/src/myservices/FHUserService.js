"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHUserService = void 0;
const FHUserRepo_1 = require("../myrepositories/FHUserRepo");
class FHUserService {
    constructor() {
        this.fhuserRepo = new FHUserRepo_1.FHUserRepo();
    }
    async findOneFHUser(Id) {
        return this.fhuserRepo.getFHUsersById(Id);
    }
    async UsersLogin(email, password) {
        return this.fhuserRepo.UsersLogin(email, password);
    }
    async createFHUser(fhuserVo) {
    }
    async updateaFHUser(Id, user_id, fhuserVo) {
    }
    async removeFHUser(Ids) {
    }
    async getFHUserById(id) {
        return this.fhuserRepo.getFHUsersById(id);
    }
    async getFHUser(search) {
        return this.fhuserRepo.getFHUser(search);
    }
    async getFHUserAll() {
        return this.fhuserRepo.getFHUserAll();
    }
    async getFHUserAll002(search) {
        return this.fhuserRepo.getFHUserAll002(search);
    }
    async getFHUserAllView() {
        return this.fhuserRepo.getFHUserAllView();
    }
}
exports.FHUserService = FHUserService;
//# sourceMappingURL=FHUserService.js.map