"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMoveService = void 0;
const store_move_repo_1 = require("../myrepositories/store_move_repo");
class StoreMoveService {
    constructor() {
        this.storeMoveRepo = new store_move_repo_1.StoreMoveRepo();
    }
    async findOneStoreMove(Id) {
        return await this.storeMoveRepo.getStoreMovesById(Id);
    }
    async createStoreMove(storeMoveVo) {
        return await this.storeMoveRepo.create(storeMoveVo);
    }
    async updateaStoreMove(Id, user_id, storeMoveVo) {
        return await this.storeMoveRepo.update(Id, user_id, storeMoveVo);
    }
    async removeStoreMove(Ids) {
        console.log(Ids);
        return await this.storeMoveRepo.remove([Ids]);
    }
    async getStoreMoveById(id) {
        return await this.storeMoveRepo.getStoreMovesById(id);
    }
    async getStoreMoveList(search) {
        return await this.storeMoveRepo.getStoreMoveList(search);
    }
    async getStoreMoveAll() {
        return await this.storeMoveRepo.getStoreMoveAll();
    }
    async getStoreMoveAllView() {
        return await this.storeMoveRepo.getStoreMoveAllView();
    }
}
exports.StoreMoveService = StoreMoveService;
//# sourceMappingURL=store_move_service.js.map