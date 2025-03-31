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
exports.QuotationItem = void 0;
const typeorm_1 = require("typeorm");
let QuotationItem = class QuotationItem {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photo', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'percentage', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "percentage", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'direct_price', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "directPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'reduction', nullable: true, length: 10 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "reduction", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'qty', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "qty", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit_price', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit_cost', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "unitCost", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], QuotationItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], QuotationItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'discount', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'productname', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "productname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'discount_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QuotationItem.prototype, "discountType", void 0);
QuotationItem = __decorate([
    (0, typeorm_1.Entity)('quotation_item')
], QuotationItem);
exports.QuotationItem = QuotationItem;
//# sourceMappingURL=QuotationItem.js.map