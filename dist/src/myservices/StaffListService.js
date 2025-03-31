"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffListService = void 0;
const myrepositories_1 = require("../myrepositories");
class StaffListService {
    constructor() {
        this.staffListRepo = new myrepositories_1.StaffListRepo();
    }
    async findOneStaffList(Id) {
        return this.staffListRepo.getStaffListsById(Id);
    }
    async createStaffList(staffListVo) {
        return this.staffListRepo.create(staffListVo);
    }
    async updateaStaffList(Id, user_id, staffListVo) {
        staffListVo.updatedAt = new Date();
        staffListVo.updatedUid = user_id;
        return this.staffListRepo.update(Id, user_id, staffListVo);
    }
    async removeStaffList(Ids) {
        return this.staffListRepo.remove(Ids);
    }
    async getStaffListById(id) {
        return this.staffListRepo.getStaffListsById(id);
    }
    async getStaffList(search) {
        return this.staffListRepo.getStaffList(search);
    }
    async getStaffListAll(search) {
        return this.staffListRepo.getStaffListAll(search);
    }
    async getStaffListAllView() {
        return this.staffListRepo.getStaffListAllView();
    }
}
exports.StaffListService = StaffListService;
//# sourceMappingURL=StaffListService.js.map