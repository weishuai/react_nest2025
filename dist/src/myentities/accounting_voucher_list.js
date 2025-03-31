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
exports.AccountingVoucherList = void 0;
const typeorm_1 = require("typeorm");
let AccountingVoucherList = class AccountingVoucherList {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "mid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'product', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'note', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'landed_cost', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "landedCost", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'subject', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'analysis', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "analysis", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'number', nullable: true }),
    __metadata("design:type", Number)
], AccountingVoucherList.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'unit', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'price', nullable: true }),
    __metadata("design:type", Number)
], AccountingVoucherList.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'tax', nullable: true }),
    __metadata("design:type", Number)
], AccountingVoucherList.prototype, "tax", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'subtotal', nullable: true }),
    __metadata("design:type", Number)
], AccountingVoucherList.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], AccountingVoucherList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], AccountingVoucherList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucherList.prototype, "updatedUid", void 0);
AccountingVoucherList = __decorate([
    (0, typeorm_1.Entity)('accounting_voucher_list')
], AccountingVoucherList);
exports.AccountingVoucherList = AccountingVoucherList;
//# sourceMappingURL=accounting_voucher_list.js.map