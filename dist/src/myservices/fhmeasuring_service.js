"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FhmeasuringService = void 0;
const fhmeasuring_repo_1 = require("../myrepositories/fhmeasuring_repo");
class FhmeasuringService {
    constructor() {
        this.fhmeasuringRepo = new fhmeasuring_repo_1.FhmeasuringRepo();
    }
    async findOneFhmeasuring(Id) {
        return await this.fhmeasuringRepo.getFhmeasuringsById(Id);
    }
    async createFhmeasuring(fhmeasuringVo) {
        return await this.fhmeasuringRepo.create(fhmeasuringVo);
    }
    async updateaFhmeasuring(Id, user_id, fhmeasuringVo) {
        return await this.fhmeasuringRepo.update(Id, user_id, fhmeasuringVo);
    }
    async removeFhmeasuring(Ids) {
        console.log(Ids);
        return await this.fhmeasuringRepo.remove([Ids]);
    }
    async getFhmeasuringById(id) {
        return await this.fhmeasuringRepo.getFhmeasuringsById(id);
    }
    async getFhmeasuringList(search) {
        return await this.fhmeasuringRepo.getFhmeasuringList(search);
    }
    async getFhmeasuringAll() {
        return await this.fhmeasuringRepo.getFhmeasuringAll();
    }
    async getFhmeasuringAllView() {
        return await this.fhmeasuringRepo.getFhmeasuringAllView();
    }
}
exports.FhmeasuringService = FhmeasuringService;
//# sourceMappingURL=fhmeasuring_service.js.map