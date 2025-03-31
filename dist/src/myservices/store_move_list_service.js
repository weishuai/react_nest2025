"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMoveListService = void 0;
const store_move_list_repo_1 = require("../myrepositories/store_move_list_repo");
class StoreMoveListService {
    constructor() {
        this.storeMoveListRepo = new store_move_list_repo_1.StoreMoveListRepo();
    }
    async findOneStoreMoveList(Id) {
        return await this.storeMoveListRepo.getStoreMoveListsById(Id);
    }
    async createStoreMoveList(storeMoveListVo) {
        return await this.storeMoveListRepo.create(storeMoveListVo);
    }
    async updateaStoreMoveList(Id, user_id, storeMoveListVo) {
        return await this.storeMoveListRepo.update(Id, user_id, storeMoveListVo);
    }
    async removeStoreMoveList(Ids) {
        console.log(Ids);
        return await this.storeMoveListRepo.remove([Ids]);
    }
    async getStoreMoveListById(id) {
        return await this.storeMoveListRepo.getStoreMoveListsById(id);
    }
    async getStoreMoveListList(search) {
        return await this.storeMoveListRepo.getStoreMoveListList(search);
    }
    async getStoreMoveListAll() {
        return await this.storeMoveListRepo.getStoreMoveListAll();
    }
    async getStoreMoveListAllView() {
        return await this.storeMoveListRepo.getStoreMoveListAllView();
    }
}
exports.StoreMoveListService = StoreMoveListService;
//# sourceMappingURL=store_move_list_service.js.map