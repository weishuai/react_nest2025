"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualitylnspectionItemService = void 0;
const quality_inspection_item_repo_1 = require("../myrepositories/quality_inspection_item_repo");
class QualitylnspectionItemService {
    constructor() {
        this.qualitylnspectionItemRepo = new quality_inspection_item_repo_1.QualitylnspectionItemRepo();
    }
    async findOneQualitylnspectionItem(Id) {
        return await this.qualitylnspectionItemRepo.getQualitylnspectionItemsById(Id);
    }
    async createQualitylnspectionItem(qualitylnspectionItemVo) {
        return await this.qualitylnspectionItemRepo.create(qualitylnspectionItemVo);
    }
    async updateaQualitylnspectionItem(Id, user_id, qualitylnspectionItemVo) {
        return await this.qualitylnspectionItemRepo.update(Id, user_id, qualitylnspectionItemVo);
    }
    async removeQualitylnspectionItem(Ids) {
        console.log(Ids);
        return await this.qualitylnspectionItemRepo.remove([Ids]);
    }
    async getQualitylnspectionItemById(id) {
        return await this.qualitylnspectionItemRepo.getQualitylnspectionItemsById(id);
    }
    async getQualitylnspectionItemList(search) {
        return await this.qualitylnspectionItemRepo.getQualitylnspectionItemList(search);
    }
    async getQualitylnspectionItemAll() {
        return await this.qualitylnspectionItemRepo.getQualitylnspectionItemAll();
    }
    async getQualitylnspectionItemAllView() {
        return await this.qualitylnspectionItemRepo.getQualitylnspectionItemAllView();
    }
}
exports.QualitylnspectionItemService = QualitylnspectionItemService;
//# sourceMappingURL=quality_inspection_item_service.js.map