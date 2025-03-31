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
exports.Quotation = void 0;
const typeorm_1 = require("typeorm");
let Quotation = class Quotation {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], Quotation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'quotation_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "quotationName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sales_person', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "salesPerson", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'opportunity', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "opportunity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payment_terms', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "paymentTerms", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contact', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'taxes', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "taxes", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'expiration_date', nullable: true }),
    __metadata("design:type", Date)
], Quotation.prototype, "expirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'cat', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "cat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'test2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "test2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "additionalField3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'additional_field4', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "additionalField4", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'terms_conditions', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "termsConditions", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'remark', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Quotation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Quotation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "updatedUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'status', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'amount', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'percentage', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "percentage", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'discount', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'total_discount', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "totalDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'test1', nullable: true }),
    __metadata("design:type", String)
], Quotation.prototype, "test1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'client_id', nullable: true, length: 10 }),
    __metadata("design:type", String)
], Quotation.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ref_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "refNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'discount_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Quotation.prototype, "discountType", void 0);
Quotation = __decorate([
    (0, typeorm_1.Entity)('quotation')
], Quotation);
exports.Quotation = Quotation;
//# sourceMappingURL=Quotation.js.map