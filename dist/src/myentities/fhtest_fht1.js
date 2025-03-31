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
exports.FhtestFht1 = void 0;
const typeorm_1 = require("typeorm");
let FhtestFht1 = class FhtestFht1 {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'fhF1', nullable: true }),
    __metadata("design:type", Number)
], FhtestFht1.prototype, "fhF1", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fhF2', nullable: true }),
    __metadata("design:type", Number)
], FhtestFht1.prototype, "fhF2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF3", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhF4', nullable: true }),
    __metadata("design:type", Date)
], FhtestFht1.prototype, "fhF4", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'fhF5', nullable: true }),
    __metadata("design:type", Number)
], FhtestFht1.prototype, "fhF5", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF6', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF6", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhF7', nullable: true }),
    __metadata("design:type", Date)
], FhtestFht1.prototype, "fhF7", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'fhF8', nullable: true }),
    __metadata("design:type", Boolean)
], FhtestFht1.prototype, "fhF8", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF9', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF9", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF10', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF10", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF11', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF11", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF12', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF12", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF13', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF13", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhF14', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "fhF14", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhF15', nullable: true }),
    __metadata("design:type", Date)
], FhtestFht1.prototype, "fhF15", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fhF16', nullable: true }),
    __metadata("design:type", Number)
], FhtestFht1.prototype, "fhF16", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'fhF17', nullable: true }),
    __metadata("design:type", Number)
], FhtestFht1.prototype, "fhF17", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], FhtestFht1.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], FhtestFht1.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhtestFht1.prototype, "updatedUid", void 0);
FhtestFht1 = __decorate([
    (0, typeorm_1.Entity)('fhtest_fht1')
], FhtestFht1);
exports.FhtestFht1 = FhtestFht1;
//# sourceMappingURL=fhtest_fht1.js.map