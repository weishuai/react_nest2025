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
exports.ProcurePlanList = void 0;
const typeorm_1 = require("typeorm");
let ProcurePlanList = class ProcurePlanList {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhtext', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "fhtext", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'number', nullable: true }),
    __metadata("design:type", Number)
], ProcurePlanList.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'orderedQuantity', nullable: true }),
    __metadata("design:type", Number)
], ProcurePlanList.prototype, "orderedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'unitPrice', nullable: true }),
    __metadata("design:type", Number)
], ProcurePlanList.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlanList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], ProcurePlanList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePlanList.prototype, "updatedUid", void 0);
ProcurePlanList = __decorate([
    (0, typeorm_1.Entity)('procure_plan_list')
], ProcurePlanList);
exports.ProcurePlanList = ProcurePlanList;
//# sourceMappingURL=procure_plan_list.js.map