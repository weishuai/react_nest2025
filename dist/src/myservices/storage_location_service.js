"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragelocationService = void 0;
const storage_location_repo_1 = require("../myrepositories/storage_location_repo");
class StoragelocationService {
    constructor() {
        this.storagelocationRepo = new storage_location_repo_1.StoragelocationRepo();
    }
    async findOneStoragelocation(Id) {
        return await this.storagelocationRepo.getStoragelocationsById(Id);
    }
    async createStoragelocation(storagelocationVo) {
        return await this.storagelocationRepo.create(storagelocationVo);
    }
    async updateaStoragelocation(Id, user_id, storagelocationVo) {
        return await this.storagelocationRepo.update(Id, user_id, storagelocationVo);
    }
    async removeStoragelocation(Ids) {
        console.log(Ids);
        return await this.storagelocationRepo.remove([Ids]);
    }
    async getStoragelocationById(id) {
        return await this.storagelocationRepo.getStoragelocationsById(id);
    }
    async getStoragelocationList(search) {
        return await this.storagelocationRepo.getStoragelocationList(search);
    }
    async getStoragelocationAll() {
        return await this.storagelocationRepo.getStoragelocationAll();
    }
    async getStoragelocationAllView() {
        return await this.storagelocationRepo.getStoragelocationAllView();
    }
}
exports.StoragelocationService = StoragelocationService;
//# sourceMappingURL=storage_location_service.js.map