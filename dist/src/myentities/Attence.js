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
exports.Attence = void 0;
const typeorm_1 = require("typeorm");
let Attence = class Attence {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Attence.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'date', nullable: true }),
    __metadata("design:type", Date)
], Attence.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'check_in_time', nullable: true }),
    __metadata("design:type", Date)
], Attence.prototype, "checkInTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'check_in_temperature',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Attence.prototype, "checkInTemperature", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'check_in_place', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "checkInPlace", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'check_in_address', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "checkInAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'check_in_notes', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "checkInNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'check_out_time', nullable: true }),
    __metadata("design:type", Date)
], Attence.prototype, "checkOutTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'check_out_temperature',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Attence.prototype, "checkOutTemperature", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'check_out_place', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "checkOutPlace", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'check_out_address', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "checkOutAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'check_out_notes', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "checkOutNotes", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Attence.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Attence.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Attence.prototype, "updatedUid", void 0);
Attence = __decorate([
    (0, typeorm_1.Entity)('attence')
], Attence);
exports.Attence = Attence;
//# sourceMappingURL=Attence.js.map