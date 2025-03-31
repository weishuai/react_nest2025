"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitService = void 0;
const myrepositories_1 = require("../myrepositories");
class UnitService {
    constructor() {
        this.unitRepo = new myrepositories_1.UnitRepo();
    }
    async findOneUnit(Id) {
        return this.unitRepo.getUnitsById(Id);
    }
    async createUnit(unitVo) {
        return this.unitRepo.create(unitVo);
    }
    async updateaUnit(Id, user_id, unitVo) {
        unitVo.updatedAt = new Date();
        unitVo.updatedUid = user_id;
        return this.unitRepo.update(Id, user_id, unitVo);
    }
    async removeUnit(Ids) {
        return this.unitRepo.remove(Ids);
    }
    async getUnitById(id) {
        return this.unitRepo.getUnitsById(id);
    }
    async getUnit(search) {
        return this.unitRepo.getUnit(search);
    }
    async getUnitAll(search) {
        return this.unitRepo.getUnitAll(search);
    }
    async getUnitAllView() {
        return this.unitRepo.getUnitAllView();
    }
}
exports.UnitService = UnitService;
//# sourceMappingURL=UnitService.js.map