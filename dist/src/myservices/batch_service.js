"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchService = void 0;
const batch_repo_1 = require("../myrepositories/batch_repo");
class BatchService {
    constructor() {
        this.batchRepo = new batch_repo_1.BatchRepo();
    }
    async findOneBatch(Id) {
        return await this.batchRepo.getBatchsById(Id);
    }
    async createBatch(batchVo) {
        return await this.batchRepo.create(batchVo);
    }
    async updateaBatch(Id, user_id, batchVo) {
        return await this.batchRepo.update(Id, user_id, batchVo);
    }
    async removeBatch(Ids) {
        console.log(Ids);
        return await this.batchRepo.remove([Ids]);
    }
    async getBatchById(id) {
        return await this.batchRepo.getBatchsById(id);
    }
    async getBatchList(search) {
        return await this.batchRepo.getBatchList(search);
    }
    async getBatchAll() {
        return await this.batchRepo.getBatchAll();
    }
    async getBatchAllView() {
        return await this.batchRepo.getBatchAllView();
    }
}
exports.BatchService = BatchService;
//# sourceMappingURL=batch_service.js.map