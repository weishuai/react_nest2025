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
exports.QualityInspection = void 0;
const typeorm_1 = require("typeorm");
let QualityInspection = class QualityInspection {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'team', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'productTmlp', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "productTmlp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'head', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "head", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'label', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'batch', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'rootCause', nullable: true }),
    __metadata("design:type", String)
], QualityInspection.prototype, "rootCause", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'pick', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "pick", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'priority', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fhtxt', nullable: true }),
    __metadata("design:type", String)
], QualityInspection.prototype, "fhtxt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'inspectionItems', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "inspectionItems", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'checkAddress', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "checkAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'correctiveAction', nullable: true }),
    __metadata("design:type", String)
], QualityInspection.prototype, "correctiveAction", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'preventiveActions', nullable: true }),
    __metadata("design:type", String)
], QualityInspection.prototype, "preventiveActions", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'sundry', nullable: true }),
    __metadata("design:type", String)
], QualityInspection.prototype, "sundry", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], QualityInspection.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], QualityInspection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QualityInspection.prototype, "updatedUid", void 0);
QualityInspection = __decorate([
    (0, typeorm_1.Entity)('quality_inspection')
], QualityInspection);
exports.QualityInspection = QualityInspection;
//# sourceMappingURL=quality_inspection.js.map