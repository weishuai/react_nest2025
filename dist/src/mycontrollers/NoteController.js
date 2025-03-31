"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const NoteService_1 = require("../myservices/NoteService");
const NoteVo_1 = require("../myvo/NoteVo");
let NoteController = class NoteController {
    constructor() {
        this.noteService = new NoteService_1.NoteService();
    }
    async createNote(NoteVo) {
        return this.noteService.createNote(NoteVo);
    }
    async updateaNote(userToken, Id, NoteVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.noteService.updateaNote(Id, userId, NoteVo);
    }
    async removeNote(Id) {
        return this.noteService.removeNote([Id]);
    }
    async getNoteById(Id) {
        return this.noteService.getNoteById(Id);
    }
    async getNote(search) {
        return this.noteService.getNote(search);
    }
    async getNoteAll(search) {
        return this.noteService.getNoteAll(search);
    }
};
__decorate([
    (0, common_1.Post)('/createNote'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NoteVo_1.NoteVo]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createNote", null);
__decorate([
    (0, common_1.Put)('/updateNote/:Id'),
    __param(0, (0, common_1.Headers)('userToken')),
    __param(1, (0, common_1.Param)('Id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, NoteVo_1.NoteVo]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateaNote", null);
__decorate([
    (0, common_1.Get)('/removeNote/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "removeNote", null);
__decorate([
    (0, common_1.Get)('/getNoteById/:Id'),
    __param(0, (0, common_1.Param)('Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNoteById", null);
__decorate([
    (0, common_1.Get)('/getNote'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NoteVo_1.NoteSearchVo]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNote", null);
__decorate([
    (0, common_1.Get)('/getNoteAll'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NoteVo_1.NoteSearchVo]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNoteAll", null);
NoteController = __decorate([
    (0, common_1.Controller)('/note')
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=NoteController.js.map