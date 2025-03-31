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
exports.AccountingVoucher = void 0;
const typeorm_1 = require("typeorm");
let AccountingVoucher = class AccountingVoucher {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'id', length: 10 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_number', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bill_reference', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "billReference", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'statement_date', nullable: true }),
    __metadata("design:type", Date)
], AccountingVoucher.prototype, "statementDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'accounting_date', nullable: true }),
    __metadata("design:type", Date)
], AccountingVoucher.prototype, "accountingDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payment_reference', nullable: true }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "paymentReference", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payee_bank', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "payeeBank", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'payment_terms', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "paymentTerms", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'journal', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "journal", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], AccountingVoucher.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], AccountingVoucher.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'isactived', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "isactived", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'islocked', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "islocked", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'create_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "createUid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_uid', nullable: true, length: 255 }),
    __metadata("design:type", String)
], AccountingVoucher.prototype, "updatedUid", void 0);
AccountingVoucher = __decorate([
    (0, typeorm_1.Entity)('accounting_voucher')
], AccountingVoucher);
exports.AccountingVoucher = AccountingVoucher;
//# sourceMappingURL=accounting_voucher.js.map