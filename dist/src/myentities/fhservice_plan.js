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
exports.FhservicePlan = void 0;
const typeorm_1 = require("typeorm");
let FhservicePlan = class FhservicePlan {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fhF1', nullable: true }),
    __metadata("design:type", Date)
], FhservicePlan.prototype, "fhF1", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhF2", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhF3", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fhF4', nullable: true }),
    __metadata("design:type", Date)
], FhservicePlan.prototype, "fhF4", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fhF5', nullable: true }),
    __metadata("design:type", Date)
], FhservicePlan.prototype, "fhF5", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fhF6', nullable: true }),
    __metadata("design:type", Date)
], FhservicePlan.prototype, "fhF6", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF7', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhF7", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF8', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhF8", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'fhF9', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhF9", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fhF10', nullable: true }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "fhF10", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], FhservicePlan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], FhservicePlan.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], FhservicePlan.prototype, "updatedUid", void 0);
FhservicePlan = __decorate([
    (0, typeorm_1.Entity)('fhservice_plan')
], FhservicePlan);
exports.FhservicePlan = FhservicePlan;
//# sourceMappingURL=fhservice_plan.js.map