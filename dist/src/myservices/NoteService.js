"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const myrepositories_1 = require("../myrepositories");
class NoteService {
    constructor() {
        this.noteRepo = new myrepositories_1.NoteRepo();
    }
    async findOneNote(Id) {
        return this.noteRepo.getnotesById(Id);
    }
    async createNote(noteVo) {
        return this.noteRepo.create(noteVo);
    }
    async updateaNote(Id, user_id, noteVo) {
        noteVo.updatedAt = new Date();
        noteVo.updatedUid = user_id;
        return this.noteRepo.update(Id, user_id, noteVo);
    }
    async removeNote(Ids) {
        return this.noteRepo.remove(Ids);
    }
    async getNoteById(id) {
        return this.noteRepo.getnotesById(id);
    }
    async getNote(search) {
        return this.noteRepo.getnote(search);
    }
    async getNoteAll(search) {
        return this.noteRepo.getnoteAll(search);
    }
}
exports.NoteService = NoteService;
//# sourceMappingURL=NoteService.js.map