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
exports.ProcurePrice = void 0;
const typeorm_1 = require("typeorm");
let ProcurePrice = class ProcurePrice {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'supplier', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'productCode', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "productCode", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'deliveryLeadTime', nullable: true }),
    __metadata("design:type", Date)
], ProcurePrice.prototype, "deliveryLeadTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "product2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'productTemlp', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "productTemlp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'unitPrice', nullable: true }),
    __metadata("design:type", Number)
], ProcurePrice.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ative', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "ative", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'company', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], ProcurePrice.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], ProcurePrice.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], ProcurePrice.prototype, "updatedUid", void 0);
ProcurePrice = __decorate([
    (0, typeorm_1.Entity)('procure_price')
], ProcurePrice);
exports.ProcurePrice = ProcurePrice;
//# sourceMappingURL=procure_price.js.map