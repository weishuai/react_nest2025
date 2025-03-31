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
exports.ProcurePlan = void 0;
const typeorm_1 = require("typeorm");
let ProcurePlan = class ProcurePlan {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'purchaser', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "purchaser", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'applicationType', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "applicationType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'supplier', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'deadline', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlan.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'subscriptionDate', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlan.prototype, "subscriptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'deliveryDate', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlan.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sourceFile', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "sourceFile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'jobType', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "jobType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'term', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "term", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlan.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlan.prototype, "updatedUid", void 0);
ProcurePlan = __decorate([
    (0, typeorm_1.Entity)('procure_plan')
], ProcurePlan);
exports.ProcurePlan = ProcurePlan;
//# sourceMappingURL=procure_plan.js.map