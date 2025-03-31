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
exports.FHcrmTable1 = void 0;
const typeorm_1 = require("typeorm");
let FHcrmTable1 = class FHcrmTable1 {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fh_f1', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "fhF1", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fh_f2', nullable: true }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "fhF2", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'fh_f3', nullable: true }),
    __metadata("design:type", Boolean)
], FHcrmTable1.prototype, "fhF3", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'fh_f4', nullable: true }),
    __metadata("design:type", Number)
], FHcrmTable1.prototype, "fhF4", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fh_f5', nullable: true }),
    __metadata("design:type", Date)
], FHcrmTable1.prototype, "fhF5", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fh_f6', nullable: true }),
    __metadata("design:type", Date)
], FHcrmTable1.prototype, "fhF6", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fh_f7', nullable: true }),
    __metadata("design:type", Date)
], FHcrmTable1.prototype, "fhF7", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'fh_f8', nullable: true }),
    __metadata("design:type", Number)
], FHcrmTable1.prototype, "fhF8", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fh_f9', nullable: true }),
    __metadata("design:type", Number)
], FHcrmTable1.prototype, "fhF9", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fh_f10', nullable: true }),
    __metadata("design:type", Number)
], FHcrmTable1.prototype, "fhF10", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], FHcrmTable1.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], FHcrmTable1.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FHcrmTable1.prototype, "updatedUid", void 0);
FHcrmTable1 = __decorate([
    (0, typeorm_1.Entity)('fhcrm_table1')
], FHcrmTable1);
exports.FHcrmTable1 = FHcrmTable1;
//# sourceMappingURL=fhcrm_table1.js.map