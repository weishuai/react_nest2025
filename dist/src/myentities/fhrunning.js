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
exports.Fhrunning = void 0;
const typeorm_1 = require("typeorm");
let Fhrunning = class Fhrunning {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF1', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "fhF1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "fhF2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "fhF3", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fhF4', nullable: true }),
    __metadata("design:type", Number)
], Fhrunning.prototype, "fhF4", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fhF5', nullable: true }),
    __metadata("design:type", Number)
], Fhrunning.prototype, "fhF5", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fhF6', nullable: true }),
    __metadata("design:type", Number)
], Fhrunning.prototype, "fhF6", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhF7', nullable: true }),
    __metadata("design:type", Date)
], Fhrunning.prototype, "fhF7", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF8', nullable: true }),
    __metadata("design:type", String)
], Fhrunning.prototype, "fhF8", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fhF9', nullable: true }),
    __metadata("design:type", String)
], Fhrunning.prototype, "fhF9", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Fhrunning.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Fhrunning.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Fhrunning.prototype, "updatedUid", void 0);
Fhrunning = __decorate([
    (0, typeorm_1.Entity)('fhrunning')
], Fhrunning);
exports.Fhrunning = Fhrunning;
//# sourceMappingURL=fhrunning.js.map