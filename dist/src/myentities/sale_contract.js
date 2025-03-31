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
exports.SaleContract = void 0;
const typeorm_1 = require("typeorm");
let SaleContract = class SaleContract {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], SaleContract.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fhname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "fhname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'releaseTime', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "releaseTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'project', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'version', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'custom', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "custom", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'expectedCompletion', nullable: true }),
    __metadata("design:type", Date)
], SaleContract.prototype, "expectedCompletion", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'productionCompleted', nullable: true }),
    __metadata("design:type", Date)
], SaleContract.prototype, "productionCompleted", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'deliveryCompleted', nullable: true }),
    __metadata("design:type", Date)
], SaleContract.prototype, "deliveryCompleted", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'estimatedTime', nullable: true }),
    __metadata("design:type", Date)
], SaleContract.prototype, "estimatedTime", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'contractAmount', nullable: true }),
    __metadata("design:type", Number)
], SaleContract.prototype, "contractAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'invoicingAmount', nullable: true }),
    __metadata("design:type", Number)
], SaleContract.prototype, "invoicingAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'collectionAmount', nullable: true }),
    __metadata("design:type", Number)
], SaleContract.prototype, "collectionAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'completionProgress', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "completionProgress", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'specialRequirements', nullable: true }),
    __metadata("design:type", String)
], SaleContract.prototype, "specialRequirements", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], SaleContract.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], SaleContract.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], SaleContract.prototype, "updatedUid", void 0);
SaleContract = __decorate([
    (0, typeorm_1.Entity)('sale_contract')
], SaleContract);
exports.SaleContract = SaleContract;
//# sourceMappingURL=sale_contract.js.map