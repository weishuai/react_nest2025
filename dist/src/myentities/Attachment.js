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
exports.Attachment = void 0;
const typeorm_1 = require("typeorm");
let Attachment = class Attachment {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Attachment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'owner_id', length: 10 }),
    __metadata("design:type", String)
], Attachment.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)('int8', {
        name: 'owner_type',
        comment: '0: project, 1: vendor',
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Attachment.prototype, "ownerType", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'dateUploaded',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Attachment.prototype, "dateUploaded", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        nullable: true,
        length: 255,
        default: () => "''",
    }),
    __metadata("design:type", String)
], Attachment.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'upload_user_id',
        nullable: true,
        length: 10,
        default: () => "''",
    }),
    __metadata("design:type", String)
], Attachment.prototype, "uploadUserId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'when',
        nullable: true,
        length: 50,
        default: () => "''",
    }),
    __metadata("design:type", String)
], Attachment.prototype, "when", void 0);
__decorate([
    (0, typeorm_1.Column)('int8', { name: 'is_del', default: () => "'0'" }),
    __metadata("design:type", Number)
], Attachment.prototype, "isDel", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'url', nullable: true }),
    __metadata("design:type", String)
], Attachment.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'mimetype',
        nullable: true,
        length: 50,
        default: () => "''",
    }),
    __metadata("design:type", String)
], Attachment.prototype, "mimetype", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'size', nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Attachment.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attachment.prototype, "mid", void 0);
Attachment = __decorate([
    (0, typeorm_1.Entity)('attachment')
], Attachment);
exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map