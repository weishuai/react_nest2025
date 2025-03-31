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
exports.Tbmatching = void 0;
const typeorm_1 = require("typeorm");
let Tbmatching = class Tbmatching {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhdate', nullable: true }),
    __metadata("design:type", Date)
], Tbmatching.prototype, "fhdate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'sampleDate', nullable: true }),
    __metadata("design:type", Date)
], Tbmatching.prototype, "sampleDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'documentNumber', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "documentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'customerCode', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "customerCode", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'customerName', nullable: true }),
    __metadata("design:type", Number)
], Tbmatching.prototype, "customerName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sampleName', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "sampleName", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'numbe', nullable: true }),
    __metadata("design:type", Number)
], Tbmatching.prototype, "numbe", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'component', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "component", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'appearanceStyle', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "appearanceStyle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'requirements', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'technology', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "technology", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'cmyheck', nullable: true }),
    __metadata("design:type", Number)
], Tbmatching.prototype, "mycheck", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'registration', nullable: true }),
    __metadata("design:type", Number)
], Tbmatching.prototype, "registration", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'quotation', nullable: true }),
    __metadata("design:type", Number)
], Tbmatching.prototype, "quotation", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'manufacturingOrders', nullable: true }),
    __metadata("design:type", Number)
], Tbmatching.prototype, "manufacturingOrders", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Tbmatching.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Tbmatching.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Tbmatching.prototype, "updatedUid", void 0);
Tbmatching = __decorate([
    (0, typeorm_1.Entity)('tbmatching')
], Tbmatching);
exports.Tbmatching = Tbmatching;
//# sourceMappingURL=tbmatching.js.map