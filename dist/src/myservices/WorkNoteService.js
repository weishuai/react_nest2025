"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkNoteService = void 0;
const myrepositories_1 = require("../myrepositories");
class WorkNoteService {
    constructor() {
        this.workNoteRepo = new myrepositories_1.WorkNoteRepo();
    }
    async findOneWorkNote(Id) {
        return this.workNoteRepo.getWorkNotesById(Id);
    }
    async createWorkNote(workNoteVo) {
        return this.workNoteRepo.create(workNoteVo);
    }
    async updateaWorkNote(Id, user_id, workNoteVo) {
        workNoteVo.updatedAt = new Date();
        workNoteVo.updatedUid = user_id;
        return this.workNoteRepo.update(Id, user_id, workNoteVo);
    }
    async removeWorkNote(Ids) {
        return this.workNoteRepo.remove(Ids);
    }
    async getWorkNoteById(id) {
        return this.workNoteRepo.getWorkNotesById(id);
    }
    async getWorkNote(search) {
        return this.workNoteRepo.getWorkNote(search);
    }
    async getWorkNoteAll(search) {
        return this.workNoteRepo.getWorkNoteAll(search);
    }
    async getWorkNoteAllView() {
        return this.workNoteRepo.getWorkNoteAllView();
    }
}
exports.WorkNoteService = WorkNoteService;
//# sourceMappingURL=WorkNoteService.js.map