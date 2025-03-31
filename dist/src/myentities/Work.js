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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = void 0;
const typeorm_1 = require("typeorm");
let Work = class Work {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Work.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'quote', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'states', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "states", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'qty', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "qty", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'work_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "workType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'room', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contact', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'work_instructions', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "workInstructions", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'assign_to', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "assignTo", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'start_date', nullable: true }),
    __metadata("design:type", Date)
], Work.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'end_date', nullable: true }),
    __metadata("design:type", Date)
], Work.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'reedback', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "reedback", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'full_address', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "fullAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Work.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Work.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "refNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'priority', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'terms_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "termsId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sign_below_txt', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "signBelowTxt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'sign_below_photo', nullable: true }),
    __metadata("design:type", String)
], Work.prototype, "signBelowPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sign_below_userid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Work.prototype, "signBelowUserid", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'sign_below_time', nullable: true }),
    __metadata("design:type", Date)
], Work.prototype, "signBelowTime", void 0);
Work = __decorate([
    (0, typeorm_1.Entity)('work')
], Work);
exports.Work = Work;
//# sourceMappingURL=Work.js.map