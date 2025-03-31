"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHRoleService = void 0;
const FHRoleRepo_1 = require("../myrepositories/FHRoleRepo");
class FHRoleService {
    constructor() {
        this.fhroleRepo = new FHRoleRepo_1.FHRoleRepo();
    }
    async findOneFHRole(Id) {
        return this.fhroleRepo.getFHRolesById(Id);
    }
    async createFHRole(fhroleVo) {
        return this.fhroleRepo.create(fhroleVo);
    }
    async updateaFHRole(Id, user_id, fhroleVo) {
        return this.fhroleRepo.update(Id, user_id, fhroleVo);
    }
    async removeFHRole(Ids) {
        return this.fhroleRepo.remove(Ids);
    }
    async getFHRoleById(id) {
        return this.fhroleRepo.getFHRolesById(id);
    }
    async getFHRole(search) {
        return this.fhroleRepo.getFHRole(search);
    }
    async getFHRoleAll(search) {
        return this.fhroleRepo.getFHRoleAll(search);
    }
    async getFHRoleAllView() {
        return this.fhroleRepo.getFHRoleAllView();
    }
}
exports.FHRoleService = FHRoleService;
//# sourceMappingURL=FHRoleService.js.map